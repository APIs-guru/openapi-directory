from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RecipeDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeDeleteRequest:
    path_params: RecipeDeletePathParams = field()
    

@dataclass
class RecipeDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
