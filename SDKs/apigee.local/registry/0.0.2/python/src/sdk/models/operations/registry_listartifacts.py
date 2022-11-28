from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryListArtifactsPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryListArtifactsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryListArtifactsRequest:
    path_params: RegistryListArtifactsPathParams = field()
    query_params: RegistryListArtifactsQueryParams = field()
    

@dataclass
class RegistryListArtifactsResponse:
    content_type: str = field()
    status_code: int = field()
    list_artifacts_response: Optional[Any] = field(default=None)
    
