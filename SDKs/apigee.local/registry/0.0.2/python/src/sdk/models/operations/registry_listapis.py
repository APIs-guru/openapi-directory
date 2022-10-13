from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class RegistryListApisPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryListApisQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryListApisRequest:
    path_params: RegistryListApisPathParams = field(default=None)
    query_params: RegistryListApisQueryParams = field(default=None)
    

@dataclass
class RegistryListApisResponse:
    content_type: str = field(default=None)
    list_apis_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
