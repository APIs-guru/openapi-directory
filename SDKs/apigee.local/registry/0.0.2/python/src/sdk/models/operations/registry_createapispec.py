from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryCreateAPISpecPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryCreateAPISpecQueryParams:
    api_spec_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_spec_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryCreateAPISpecRequest:
    path_params: RegistryCreateAPISpecPathParams = field()
    query_params: RegistryCreateAPISpecQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryCreateAPISpecResponse:
    content_type: str = field()
    status_code: int = field()
    api_spec: Optional[Any] = field(default=None)
    
