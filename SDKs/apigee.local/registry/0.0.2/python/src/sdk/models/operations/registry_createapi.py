from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryCreateAPIPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryCreateAPIQueryParams:
    api_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryCreateAPIRequest:
    path_params: RegistryCreateAPIPathParams = field()
    query_params: RegistryCreateAPIQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryCreateAPIResponse:
    content_type: str = field()
    status_code: int = field()
    api: Optional[Any] = field(default=None)
    
