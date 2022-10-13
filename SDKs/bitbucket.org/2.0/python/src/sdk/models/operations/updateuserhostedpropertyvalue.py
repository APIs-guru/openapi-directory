from dataclasses import dataclass, field



@dataclass
class UpdateUserHostedPropertyValuePathParams:
    app_key: str = field(default=None, metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = field(default=None, metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserHostedPropertyValueRequest:
    path_params: UpdateUserHostedPropertyValuePathParams = field(default=None)
    

@dataclass
class UpdateUserHostedPropertyValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
