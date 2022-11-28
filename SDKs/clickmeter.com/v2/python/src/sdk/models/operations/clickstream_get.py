from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class ClickStreamGetFilterEnum(str, Enum):
    UNKNOWN = ""
    SPIDERS = "spiders"
    UNIQUES = "uniques"
    NONUNIQUES = "nonuniques"
    CONVERSIONS = "conversions"


@dataclass
class ClickStreamGetQueryParams:
    conversion: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'conversion', 'style': 'form', 'explode': True }})
    datapoint: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'datapoint', 'style': 'form', 'explode': True }})
    filter: Optional[ClickStreamGetFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    group: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ClickStreamGetRequest:
    query_params: ClickStreamGetQueryParams = field()
    

@dataclass
class ClickStreamGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entities_response_api_core_dto_click_stream_hit_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoClickStreamHit] = field(default=None)
    
