from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryListAPIVersionsPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryListAPIVersionsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryListAPIVersionsRequest:
    path_params: RegistryListAPIVersionsPathParams = field()
    query_params: RegistryListAPIVersionsQueryParams = field()
    

@dataclass
class RegistryListAPIVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    list_api_versions_response: Optional[Any] = field(default=None)
    
