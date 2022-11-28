from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImagesGetPendingByUserResponse:
    content_type: str = field()
    status_code: int = field()
    api2_controllers_web_api_images_controller_recipe_photos_response: Optional[shared.Api2ControllersWebAPIImagesControllerRecipePhotosResponse] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
