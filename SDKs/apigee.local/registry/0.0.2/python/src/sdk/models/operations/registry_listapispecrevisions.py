from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryListAPISpecRevisionsPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryListAPISpecRevisionsQueryParams:
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryListAPISpecRevisionsRequest:
    path_params: RegistryListAPISpecRevisionsPathParams = field()
    query_params: RegistryListAPISpecRevisionsQueryParams = field()
    

@dataclass
class RegistryListAPISpecRevisionsResponse:
    content_type: str = field()
    status_code: int = field()
    list_api_spec_revisions_response: Optional[Any] = field(default=None)
    
