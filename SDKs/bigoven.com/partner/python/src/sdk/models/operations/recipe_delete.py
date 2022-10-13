from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RecipeDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeDeleteRequest:
    path_params: RecipeDeletePathParams = field(default=None)
    

@dataclass
class RecipeDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
