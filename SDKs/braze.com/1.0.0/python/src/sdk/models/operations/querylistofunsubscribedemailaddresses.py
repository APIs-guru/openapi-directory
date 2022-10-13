from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class QueryListOfUnsubscribedEmailAddressesQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class QueryListOfUnsubscribedEmailAddressesRequest:
    query_params: QueryListOfUnsubscribedEmailAddressesQueryParams = field(default=None)
    

@dataclass
class QueryListOfUnsubscribedEmailAddressesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
