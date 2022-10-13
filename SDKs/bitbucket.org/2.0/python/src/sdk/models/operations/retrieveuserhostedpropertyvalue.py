from dataclasses import dataclass, field



@dataclass
class RetrieveUserHostedPropertyValuePathParams:
    app_key: str = field(default=None, metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = field(default=None, metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveUserHostedPropertyValueRequest:
    path_params: RetrieveUserHostedPropertyValuePathParams = field(default=None)
    

@dataclass
class RetrieveUserHostedPropertyValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
