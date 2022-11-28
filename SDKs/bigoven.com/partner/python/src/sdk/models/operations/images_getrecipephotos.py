from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImagesGetRecipePhotosPathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImagesGetRecipePhotosQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class ImagesGetRecipePhotosRequest:
    path_params: ImagesGetRecipePhotosPathParams = field()
    query_params: ImagesGetRecipePhotosQueryParams = field()
    

@dataclass
class ImagesGetRecipePhotosResponse:
    content_type: str = field()
    status_code: int = field()
    api2_controllers_web_api_images_controller_recipe_photos_response: Optional[shared.Api2ControllersWebAPIImagesControllerRecipePhotosResponse] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
