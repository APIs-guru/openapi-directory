from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class UpdateUserHostedPropertyValuePathParams:
    app_key: str = field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserHostedPropertyValueRequest:
    path_params: UpdateUserHostedPropertyValuePathParams = field()
    

@dataclass
class UpdateUserHostedPropertyValueResponse:
    content_type: str = field()
    status_code: int = field()
    
