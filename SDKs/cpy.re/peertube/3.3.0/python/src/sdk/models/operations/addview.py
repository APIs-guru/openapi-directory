from dataclasses import dataclass, field
from typing import Any


@dataclass
class AddViewPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddViewRequest:
    path_params: AddViewPathParams = field()
    

@dataclass
class AddViewResponse:
    content_type: str = field()
    status_code: int = field()
    
