from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DomainsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DomainsDeleteRequest:
    path_params: DomainsDeletePathParams = field(default=None)
    

@dataclass
class DomainsDeleteResponse:
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
