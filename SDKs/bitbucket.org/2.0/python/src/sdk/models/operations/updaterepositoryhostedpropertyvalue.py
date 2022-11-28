from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class UpdateRepositoryHostedPropertyValuePathParams:
    app_key: str = field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRepositoryHostedPropertyValueRequest:
    path_params: UpdateRepositoryHostedPropertyValuePathParams = field()
    

@dataclass
class UpdateRepositoryHostedPropertyValueResponse:
    content_type: str = field()
    status_code: int = field()
    
