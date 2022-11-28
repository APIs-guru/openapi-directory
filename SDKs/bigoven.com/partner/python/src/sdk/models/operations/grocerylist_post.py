from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroceryListPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request1: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request2: Optional[shared.Api2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroceryListPostRequest:
    request: GroceryListPostRequests = field()
    

@dataclass
class GroceryListPostResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_shopping_list_line: Optional[shared.BigOvenModelShoppingListLine] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
