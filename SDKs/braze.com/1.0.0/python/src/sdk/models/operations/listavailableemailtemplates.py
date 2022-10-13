from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListAvailableEmailTemplatesQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    modified_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modified_after', 'style': 'form', 'explode': True }})
    modified_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modified_before', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAvailableEmailTemplatesRequest:
    query_params: ListAvailableEmailTemplatesQueryParams = field(default=None)
    

@dataclass
class ListAvailableEmailTemplatesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
