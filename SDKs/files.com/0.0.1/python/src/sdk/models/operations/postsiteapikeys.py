from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class PostSiteAPIKeysRequestBodyPermissionSetEnum(str, Enum):
    NONE = "none"
    FULL = "full"
    DESKTOP_APP = "desktop_app"
    SYNC_APP = "sync_app"
    OFFICE_INTEGRATION = "office_integration"
    MOBILE_APP = "mobile_app"


@dataclass
class PostSiteAPIKeysRequestBody:
    expires_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    permission_set: Optional[PostSiteAPIKeysRequestBodyPermissionSetEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'permission_set' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostSiteAPIKeysRequest:
    request: Optional[PostSiteAPIKeysRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostSiteAPIKeysResponse:
    content_type: str = field()
    status_code: int = field()
    api_key_entity: Optional[shared.APIKeyEntity] = field(default=None)
    
