from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3EventsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3EventsIDQueryParams:
    fields: Optional[List[shared.EventDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3EventsIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3EventsIDRequest:
    path_params: GetV3EventsIDPathParams = field(default=None)
    query_params: GetV3EventsIDQueryParams = field(default=None)
    headers: GetV3EventsIDHeaders = field(default=None)
    

@dataclass
class GetV3EventsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
