from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class UploadPhotoRequestBodyContentTypeEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"

class UploadPhotoRequestBodyHiddenEnum(str, Enum):
    ONE = "1"
    TWO = "2"

class UploadPhotoRequestBodyIsFamilyEnum(str, Enum):
    ZERO = "0"
    ONE = "1"

class UploadPhotoRequestBodyIsFriendEnum(str, Enum):
    ZERO = "0"
    ONE = "1"

class UploadPhotoRequestBodyIsPublicEnum(str, Enum):
    ZERO = "0"
    ONE = "1"


@dataclass
class UploadPhotoRequestBodyPhoto:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    photo: str = field(default=None, metadata={'multipart_form': { 'field_name': 'photo' }})
    
class UploadPhotoRequestBodySafetyLevelEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"


@dataclass
class UploadPhotoRequestBody:
    api_key: str = field(default=None, metadata={'multipart_form': { 'field_name': 'api_key' }})
    content_type: Optional[UploadPhotoRequestBodyContentTypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'content_type' }})
    description: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    hidden: Optional[UploadPhotoRequestBodyHiddenEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'hidden' }})
    is_family: Optional[UploadPhotoRequestBodyIsFamilyEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'is_family' }})
    is_friend: Optional[UploadPhotoRequestBodyIsFriendEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'is_friend' }})
    is_public: Optional[UploadPhotoRequestBodyIsPublicEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'is_public' }})
    photo: UploadPhotoRequestBodyPhoto = field(default=None, metadata={'multipart_form': { 'file': True }})
    safety_level: Optional[UploadPhotoRequestBodySafetyLevelEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'safety_level' }})
    tags: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclass
class UploadPhotoRequest:
    request: UploadPhotoRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadPhotoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    upload_photo_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
