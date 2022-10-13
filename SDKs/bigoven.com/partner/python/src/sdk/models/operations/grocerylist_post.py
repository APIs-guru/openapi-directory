from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GroceryListPostRequests:
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request1: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request2: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class GroceryListPostRequest:
    request: GroceryListPostRequests = field(default=None)
    

@dataclass
class GroceryListPostResponse:
    big_oven_model_shopping_list_line: Optional[shared.BigOvenModelShoppingListLine] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
