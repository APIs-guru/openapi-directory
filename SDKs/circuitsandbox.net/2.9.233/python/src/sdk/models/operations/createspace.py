from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class CreateSpaceRequestBodyAccessModeTypeEnum(str, Enum):
    INTERNAL_ONLY = "INTERNAL_ONLY"
    INTERNAL_EXTERNAL = "INTERNAL_EXTERNAL"

class CreateSpaceRequestBodyRoleEnum(str, Enum):
    MODERATOR = "MODERATOR"
    AUTHOR = "AUTHOR"
    PARTICIPANT = "PARTICIPANT"
    READER = "READER"

class CreateSpaceRequestBodyStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class CreateSpaceRequestBodyTypeEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"
    SECRET = "SECRET"


@dataclass
class CreateSpaceRequestBody:
    access_mode_type: CreateSpaceRequestBodyAccessModeTypeEnum = field(metadata={'form': { 'field_name': 'accessModeType' }})
    name: str = field(metadata={'form': { 'field_name': 'name' }})
    role: CreateSpaceRequestBodyRoleEnum = field(metadata={'form': { 'field_name': 'role' }})
    status: CreateSpaceRequestBodyStatusEnum = field(metadata={'form': { 'field_name': 'status' }})
    type: CreateSpaceRequestBodyTypeEnum = field(metadata={'form': { 'field_name': 'type' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    large_picture_base64: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'largePictureBase64' }})
    small_picture_base64: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'smallPictureBase64' }})
    tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'tags' }})
    

@dataclass
class CreateSpaceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateSpaceRequest:
    request: CreateSpaceRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSpaceSecurity = field()
    

@dataclass
class CreateSpaceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participant_space_wrapper: Optional[Any] = field(default=None)
    
