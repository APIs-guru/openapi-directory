from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RecipeZapRecipePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeZapRecipeRequest:
    path_params: RecipeZapRecipePathParams = field()
    

@dataclass
class RecipeZapRecipeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
