from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class PostAccountGuestsGuestIDTypePermissionsPatchTypeEnum(str, Enum):
    DATAPOINT = "datapoint"
    GROUP = "group"


@dataclass
class PostAccountGuestsGuestIDTypePermissionsPatchPathParams:
    guest_id: int = field(metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    type: PostAccountGuestsGuestIDTypePermissionsPatchTypeEnum = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAccountGuestsGuestIDTypePermissionsPatchRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_requests_permission_patch_request: Optional[shared.APICoreRequestsPermissionPatchRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_requests_permission_patch_request1: Optional[shared.APICoreRequestsPermissionPatchRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_requests_permission_patch_request2: Optional[shared.APICoreRequestsPermissionPatchRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAccountGuestsGuestIDTypePermissionsPatchRequest:
    path_params: PostAccountGuestsGuestIDTypePermissionsPatchPathParams = field()
    request: PostAccountGuestsGuestIDTypePermissionsPatchRequests = field()
    

@dataclass
class PostAccountGuestsGuestIDTypePermissionsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
