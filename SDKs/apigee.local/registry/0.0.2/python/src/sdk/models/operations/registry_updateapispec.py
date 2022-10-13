from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryUpdateAPISpecPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = field(default=None, metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryUpdateAPISpecQueryParams:
    allow_missing: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow_missing', 'style': 'form', 'explode': True }})
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryUpdateAPISpecRequest:
    path_params: RegistryUpdateAPISpecPathParams = field(default=None)
    query_params: RegistryUpdateAPISpecQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryUpdateAPISpecResponse:
    api_spec: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
