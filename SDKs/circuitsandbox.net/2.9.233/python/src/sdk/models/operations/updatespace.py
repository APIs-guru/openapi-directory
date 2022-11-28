from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateSpacePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UpdateSpaceRequestBodyAccessModeTypeEnum(str, Enum):
    INTERNAL_ONLY = "INTERNAL_ONLY"
    INTERNAL_EXTERNAL = "INTERNAL_EXTERNAL"
    NO_CHANGE = "NO_CHANGE"

class UpdateSpaceRequestBodyRoleEnum(str, Enum):
    MODERATOR = "MODERATOR"
    AUTHOR = "AUTHOR"
    PARTICIPANT = "PARTICIPANT"
    READER = "READER"
    NO_CHANGE = "NO_CHANGE"

class UpdateSpaceRequestBodyStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class UpdateSpaceRequestBodyTypeEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"
    SECRET = "SECRET"
    NO_CHANGE = "NO_CHANGE"


@dataclass
class UpdateSpaceRequestBody:
    access_mode_type: Optional[UpdateSpaceRequestBodyAccessModeTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'accessModeType' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    large_picture_base64: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'largePictureBase64' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    owner_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ownerId' }})
    role: Optional[UpdateSpaceRequestBodyRoleEnum] = field(default=None, metadata={'form': { 'field_name': 'role' }})
    small_picture_base64: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'smallPictureBase64' }})
    status: Optional[UpdateSpaceRequestBodyStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'tags' }})
    type: Optional[UpdateSpaceRequestBodyTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'type' }})
    

@dataclass
class UpdateSpaceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSpaceRequest:
    path_params: UpdateSpacePathParams = field()
    security: UpdateSpaceSecurity = field()
    request: Optional[UpdateSpaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateSpaceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participant_space_wrapper: Optional[Any] = field(default=None)
    
