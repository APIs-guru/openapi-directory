from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetAPIPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetAPIRequest:
    path_params: RegistryGetAPIPathParams = field(default=None)
    

@dataclass
class RegistryGetAPIResponse:
    api: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
