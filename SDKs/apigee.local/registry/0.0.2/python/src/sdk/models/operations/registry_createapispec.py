from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryCreateAPISpecPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryCreateAPISpecQueryParams:
    api_spec_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_spec_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryCreateAPISpecRequest:
    path_params: RegistryCreateAPISpecPathParams = field(default=None)
    query_params: RegistryCreateAPISpecQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryCreateAPISpecResponse:
    api_spec: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
