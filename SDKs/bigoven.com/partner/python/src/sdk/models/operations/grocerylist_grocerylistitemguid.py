from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GroceryListGroceryListItemGUIDPathParams:
    guid: str = field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroceryListGroceryListItemGUIDRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request: Optional[shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request1: Optional[shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request2: Optional[shared.Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroceryListGroceryListItemGUIDRequest:
    path_params: GroceryListGroceryListItemGUIDPathParams = field()
    request: GroceryListGroceryListItemGUIDRequests = field()
    

@dataclass
class GroceryListGroceryListItemGUIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
