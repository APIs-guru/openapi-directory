from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class PostAPIKeysRequestBodyPermissionSetEnum(str, Enum):
    NONE = "none"
    FULL = "full"
    DESKTOP_APP = "desktop_app"
    SYNC_APP = "sync_app"
    OFFICE_INTEGRATION = "office_integration"
    MOBILE_APP = "mobile_app"


@dataclass
class PostAPIKeysRequestBody:
    expires_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    permission_set: Optional[PostAPIKeysRequestBodyPermissionSetEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'permission_set' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostAPIKeysRequest:
    request: Optional[PostAPIKeysRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostAPIKeysResponse:
    content_type: str = field()
    status_code: int = field()
    api_key_entity: Optional[shared.APIKeyEntity] = field(default=None)
    
