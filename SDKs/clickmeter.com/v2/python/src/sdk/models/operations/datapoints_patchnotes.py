from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DataPointsPatchNotesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DataPointsPatchNotesRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_requests_generic_text_patch: Optional[shared.APICoreRequestsGenericTextPatch] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_requests_generic_text_patch1: Optional[shared.APICoreRequestsGenericTextPatch] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_requests_generic_text_patch2: Optional[shared.APICoreRequestsGenericTextPatch] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class DataPointsPatchNotesRequest:
    path_params: DataPointsPatchNotesPathParams = field()
    request: DataPointsPatchNotesRequests = field()
    

@dataclass
class DataPointsPatchNotesResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
