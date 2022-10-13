from dataclasses import dataclass, field
from typing import Optional


@dataclass
class QueryHardBouncedEmailsQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class QueryHardBouncedEmailsRequest:
    query_params: QueryHardBouncedEmailsQueryParams = field(default=None)
    

@dataclass
class QueryHardBouncedEmailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
