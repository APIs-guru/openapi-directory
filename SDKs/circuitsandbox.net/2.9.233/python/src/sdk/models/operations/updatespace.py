from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class UpdateSpacePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSpaceRequest:
    path_params: UpdateSpacePathParams = field(default=None)
    request: Optional[UpdateSpaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSpaceSecurity = field(default=None)
    

@dataclass
class UpdateSpaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    participant_space_wrapper: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
