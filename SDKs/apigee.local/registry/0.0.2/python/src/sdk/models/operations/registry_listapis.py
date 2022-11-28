from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryListApisPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryListApisQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryListApisRequest:
    path_params: RegistryListApisPathParams = field()
    query_params: RegistryListApisQueryParams = field()
    

@dataclass
class RegistryListApisResponse:
    content_type: str = field()
    status_code: int = field()
    list_apis_response: Optional[Any] = field(default=None)
    
