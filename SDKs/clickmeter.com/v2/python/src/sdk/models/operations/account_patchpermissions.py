from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class AccountPatchPermissionsTypeEnum(str, Enum):
    DATAPOINT = "datapoint"
    GROUP = "group"


@dataclass
class AccountPatchPermissionsPathParams:
    guest_id: int = field(default=None, metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    type: AccountPatchPermissionsTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountPatchPermissionsRequests:
    api_core_requests_permission_patch_request: Optional[shared.APICoreRequestsPermissionPatchRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_requests_permission_patch_request1: Optional[shared.APICoreRequestsPermissionPatchRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_requests_permission_patch_request2: Optional[shared.APICoreRequestsPermissionPatchRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AccountPatchPermissionsRequest:
    path_params: AccountPatchPermissionsPathParams = field(default=None)
    request: AccountPatchPermissionsRequests = field(default=None)
    

@dataclass
class AccountPatchPermissionsResponse:
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
