from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class TagsGetTypeEnum(str, Enum):
    TP = "tp"
    TL = "tl"
    DP = "dp"
    GR = "gr"


@dataclass
class TagsGetQueryParams:
    datapoints: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'datapoints', 'style': 'form', 'explode': True }})
    groups: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groups', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    type: Optional[TagsGetTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class TagsGetRequest:
    query_params: TagsGetQueryParams = field(default=None)
    

@dataclass
class TagsGetResponse:
    api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
