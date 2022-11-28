from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GroceryListDepartmentRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_grocery_list_controller_department_model: Optional[shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_department_model1: Optional[shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_department_model2: Optional[shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GroceryListDepartmentRequest:
    request: GroceryListDepartmentRequests = field()
    

@dataclass
class GroceryListDepartmentResponse:
    content_type: str = field()
    status_code: int = field()
    api2_grocery_list_department_results: Optional[List[shared.Api2GroceryListDepartmentResult]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
