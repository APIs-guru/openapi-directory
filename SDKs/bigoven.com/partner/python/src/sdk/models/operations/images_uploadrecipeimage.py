from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ImagesUploadRecipeImagePathParams:
    recipe_id: str = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImagesUploadRecipeImageQueryParams:
    caption: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'caption', 'style': 'form', 'explode': True }})
    lat: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    

@dataclass
class ImagesUploadRecipeImageRequest:
    path_params: ImagesUploadRecipeImagePathParams = field()
    query_params: ImagesUploadRecipeImageQueryParams = field()
    

@dataclass
class ImagesUploadRecipeImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
