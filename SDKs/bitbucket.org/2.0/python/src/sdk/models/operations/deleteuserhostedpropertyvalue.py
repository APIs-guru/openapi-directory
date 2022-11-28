from dataclasses import dataclass, field



@dataclass
class DeleteUserHostedPropertyValuePathParams:
    app_key: str = field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserHostedPropertyValueRequest:
    path_params: DeleteUserHostedPropertyValuePathParams = field()
    

@dataclass
class DeleteUserHostedPropertyValueResponse:
    content_type: str = field()
    status_code: int = field()
    
