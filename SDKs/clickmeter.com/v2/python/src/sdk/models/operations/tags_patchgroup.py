from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TagsPatchGroupPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagsPatchGroupRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_requests_patch_body: Optional[shared.APICoreRequestsPatchBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_requests_patch_body1: Optional[shared.APICoreRequestsPatchBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_requests_patch_body2: Optional[shared.APICoreRequestsPatchBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class TagsPatchGroupRequest:
    path_params: TagsPatchGroupPathParams = field()
    request: TagsPatchGroupRequests = field()
    

@dataclass
class TagsPatchGroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
