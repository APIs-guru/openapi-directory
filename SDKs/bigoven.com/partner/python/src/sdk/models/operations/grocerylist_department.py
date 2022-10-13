from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GroceryListDepartmentRequests:
    api2_controllers_web_api_grocery_list_controller_department_model: Optional[shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_grocery_list_controller_department_model1: Optional[shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_grocery_list_controller_department_model2: Optional[shared.Api2ControllersWebAPIGroceryListControllerDepartmentModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class GroceryListDepartmentRequest:
    request: GroceryListDepartmentRequests = field(default=None)
    

@dataclass
class GroceryListDepartmentResponse:
    api2_grocery_list_department_results: Optional[List[shared.Api2GroceryListDepartmentResult]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
