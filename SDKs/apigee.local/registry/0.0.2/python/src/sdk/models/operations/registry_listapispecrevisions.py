from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class RegistryListAPISpecRevisionsPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = field(default=None, metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryListAPISpecRevisionsQueryParams:
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryListAPISpecRevisionsRequest:
    path_params: RegistryListAPISpecRevisionsPathParams = field(default=None)
    query_params: RegistryListAPISpecRevisionsQueryParams = field(default=None)
    

@dataclass
class RegistryListAPISpecRevisionsResponse:
    content_type: str = field(default=None)
    list_api_spec_revisions_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
