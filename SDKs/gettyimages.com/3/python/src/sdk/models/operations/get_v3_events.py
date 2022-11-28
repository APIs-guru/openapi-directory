from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3EventsQueryParams:
    fields: Optional[List[shared.EventDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3EventsHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3EventsRequest:
    headers: GetV3EventsHeaders = field()
    query_params: GetV3EventsQueryParams = field()
    

@dataclass
class GetV3EventsResponse:
    content_type: str = field()
    status_code: int = field()
    
