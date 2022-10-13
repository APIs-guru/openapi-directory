from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GroceryListGroceryListItemGUIDPathParams:
    guid: str = field(default=None, metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroceryListGroceryListItemGUIDRequests:
    api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request: Optional[shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request1: Optional[shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request2: Optional[shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class GroceryListGroceryListItemGUIDRequest:
    path_params: GroceryListGroceryListItemGUIDPathParams = field(default=None)
    request: GroceryListGroceryListItemGUIDRequests = field(default=None)
    

@dataclass
class GroceryListGroceryListItemGUIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
