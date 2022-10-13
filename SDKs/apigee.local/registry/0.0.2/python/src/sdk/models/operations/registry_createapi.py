from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryCreateAPIPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryCreateAPIQueryParams:
    api_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryCreateAPIRequest:
    path_params: RegistryCreateAPIPathParams = field(default=None)
    query_params: RegistryCreateAPIQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryCreateAPIResponse:
    api: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
