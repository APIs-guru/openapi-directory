from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PatchAPIKeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchAPIKeysIDRequestBodyPermissionSetEnum(str, Enum):
    NONE = "none"
    FULL = "full"
    DESKTOP_APP = "desktop_app"
    SYNC_APP = "sync_app"
    OFFICE_INTEGRATION = "office_integration"
    MOBILE_APP = "mobile_app"


@dataclass
class PatchAPIKeysIDRequestBody:
    expires_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    permission_set: Optional[PatchAPIKeysIDRequestBodyPermissionSetEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'permission_set' }})
    

@dataclass
class PatchAPIKeysIDRequest:
    path_params: PatchAPIKeysIDPathParams = field()
    request: Optional[PatchAPIKeysIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchAPIKeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_key_entity: Optional[shared.APIKeyEntity] = field(default=None)
    
