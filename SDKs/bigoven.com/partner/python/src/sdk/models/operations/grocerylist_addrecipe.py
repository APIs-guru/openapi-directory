from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GroceryListAddRecipeRequests:
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request1: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request2: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class GroceryListAddRecipeRequest:
    request: GroceryListAddRecipeRequests = field(default=None)
    

@dataclass
class GroceryListAddRecipeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
