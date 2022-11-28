from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroceryListAddRecipeRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request1: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request2: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroceryListAddRecipeRequest:
    request: GroceryListAddRecipeRequests = field()
    

@dataclass
class GroceryListAddRecipeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
