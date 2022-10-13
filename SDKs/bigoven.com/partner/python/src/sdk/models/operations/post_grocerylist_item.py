from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostGrocerylistItemRequests:
    api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request1: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request2: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostGrocerylistItemRequest:
    request: PostGrocerylistItemRequests = field(default=None)
    

@dataclass
class PostGrocerylistItemResponse:
    big_oven_model_shopping_list_line: Optional[shared.BigOvenModelShoppingListLine] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
