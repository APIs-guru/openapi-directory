from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

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
    access_mode_type: CreateSpaceRequestBodyAccessModeTypeEnum = field(default=None, metadata={'form': { 'field_name': 'accessModeType' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    large_picture_base64: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'largePictureBase64' }})
    name: str = field(default=None, metadata={'form': { 'field_name': 'name' }})
    role: CreateSpaceRequestBodyRoleEnum = field(default=None, metadata={'form': { 'field_name': 'role' }})
    small_picture_base64: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'smallPictureBase64' }})
    status: CreateSpaceRequestBodyStatusEnum = field(default=None, metadata={'form': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'tags' }})
    type: CreateSpaceRequestBodyTypeEnum = field(default=None, metadata={'form': { 'field_name': 'type' }})
    

@dataclass
class CreateSpaceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateSpaceRequest:
    request: CreateSpaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSpaceSecurity = field(default=None)
    

@dataclass
class CreateSpaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    participant_space_wrapper: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
