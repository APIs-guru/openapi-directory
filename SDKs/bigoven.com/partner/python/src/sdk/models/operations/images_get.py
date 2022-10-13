from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ImagesGetPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImagesGetRequest:
    path_params: ImagesGetPathParams = field(default=None)
    

@dataclass
class ImagesGetResponse:
    big_oven_model_api_images: Optional[List[shared.BigOvenModelAPIImage]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
