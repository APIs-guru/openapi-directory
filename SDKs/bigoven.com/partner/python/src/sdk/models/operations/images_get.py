from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ImagesGetPathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImagesGetRequest:
    path_params: ImagesGetPathParams = field()
    

@dataclass
class ImagesGetResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_images: Optional[List[shared.BigOvenModelAPIImage]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
