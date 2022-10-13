from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class RegistryListAPIVersionsPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryListAPIVersionsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryListAPIVersionsRequest:
    path_params: RegistryListAPIVersionsPathParams = field(default=None)
    query_params: RegistryListAPIVersionsQueryParams = field(default=None)
    

@dataclass
class RegistryListAPIVersionsResponse:
    content_type: str = field(default=None)
    list_api_versions_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
