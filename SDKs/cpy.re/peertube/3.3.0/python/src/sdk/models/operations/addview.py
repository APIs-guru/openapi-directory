from dataclasses import dataclass, field
from typing import Any


@dataclass
class AddViewPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddViewRequest:
    path_params: AddViewPathParams = field(default=None)
    

@dataclass
class AddViewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
