from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetAPIPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetAPIRequest:
    path_params: RegistryGetAPIPathParams = field()
    

@dataclass
class RegistryGetAPIResponse:
    content_type: str = field()
    status_code: int = field()
    api: Optional[Any] = field(default=None)
    
