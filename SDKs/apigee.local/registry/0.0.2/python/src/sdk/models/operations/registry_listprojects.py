from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryListProjectsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryListProjectsRequest:
    query_params: RegistryListProjectsQueryParams = field()
    

@dataclass
class RegistryListProjectsResponse:
    content_type: str = field()
    status_code: int = field()
    list_projects_response: Optional[Any] = field(default=None)
    
