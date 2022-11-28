from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetMessagesSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"


@dataclass
class GetMessagesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetMessagesSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMessagesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetMessagesRequest:
    query_params: GetMessagesQueryParams = field()
    security: GetMessagesSecurity = field()
    

@dataclass
class GetMessagesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    messages: Optional[List[shared.Message]] = field(default=None)
    
