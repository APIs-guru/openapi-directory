from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DomainsGetTypeEnum(str, Enum):
    SYSTEM = "system"
    GO = "go"
    PERSONAL = "personal"
    DEDICATED = "dedicated"


@dataclass
class DomainsGetQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    type: Optional[DomainsGetTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DomainsGetRequest:
    query_params: DomainsGetQueryParams = field()
    

@dataclass
class DomainsGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64] = field(default=None)
    
