from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3EventsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3EventsIDQueryParams:
    fields: Optional[List[shared.EventDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3EventsIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3EventsIDRequest:
    headers: GetV3EventsIDHeaders = field()
    path_params: GetV3EventsIDPathParams = field()
    query_params: GetV3EventsIDQueryParams = field()
    

@dataclass
class GetV3EventsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
