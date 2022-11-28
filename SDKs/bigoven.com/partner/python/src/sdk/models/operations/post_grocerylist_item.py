from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostGrocerylistItemRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request1: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request2: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostGrocerylistItemRequest:
    request: PostGrocerylistItemRequests = field()
    

@dataclass
class PostGrocerylistItemResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_shopping_list_line: Optional[shared.BigOvenModelShoppingListLine] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
