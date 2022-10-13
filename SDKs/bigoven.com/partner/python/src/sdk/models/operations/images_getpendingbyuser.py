from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImagesGetPendingByUserResponse:
    api2_controllers_web_api_images_controller_recipe_photos_response: Optional[shared.Api2ControllersWebAPIImagesControllerRecipePhotosResponse] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
