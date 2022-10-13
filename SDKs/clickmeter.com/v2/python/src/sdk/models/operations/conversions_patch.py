from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConversionsPatchPathParams:
    conversion_id: int = field(default=None, metadata={'path_param': { 'field_name': 'conversionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConversionsPatchRequests:
    api_core_requests_conversion_patch_body: Optional[shared.APICoreRequestsConversionPatchBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_requests_conversion_patch_body1: Optional[shared.APICoreRequestsConversionPatchBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_requests_conversion_patch_body2: Optional[shared.APICoreRequestsConversionPatchBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ConversionsPatchRequest:
    path_params: ConversionsPatchPathParams = field(default=None)
    request: ConversionsPatchRequests = field(default=None)
    

@dataclass
class ConversionsPatchResponse:
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
