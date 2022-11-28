from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class UpdatePullRequestHostedPropertyValuePathParams:
    app_key: str = field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    pullrequest_id: str = field(metadata={'path_param': { 'field_name': 'pullrequest_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePullRequestHostedPropertyValueRequest:
    path_params: UpdatePullRequestHostedPropertyValuePathParams = field()
    

@dataclass
class UpdatePullRequestHostedPropertyValueResponse:
    content_type: str = field()
    status_code: int = field()
    
