from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PostUsersUserIDAPIKeysPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum(str, Enum):
    NONE = "none"
    FULL = "full"
    DESKTOP_APP = "desktop_app"
    SYNC_APP = "sync_app"
    OFFICE_INTEGRATION = "office_integration"
    MOBILE_APP = "mobile_app"


@dataclass
class PostUsersUserIDAPIKeysRequestBody:
    expires_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    permission_set: Optional[PostUsersUserIDAPIKeysRequestBodyPermissionSetEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'permission_set' }})
    

@dataclass
class PostUsersUserIDAPIKeysRequest:
    path_params: PostUsersUserIDAPIKeysPathParams = field(default=None)
    request: Optional[PostUsersUserIDAPIKeysRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUsersUserIDAPIKeysResponse:
    api_key_entity: Optional[shared.APIKeyEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
