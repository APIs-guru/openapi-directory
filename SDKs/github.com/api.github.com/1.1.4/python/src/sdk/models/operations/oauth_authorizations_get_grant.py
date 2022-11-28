from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsGetGrantPathParams:
    grant_id: int = field(metadata={'path_param': { 'field_name': 'grant_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsGetGrantRequest:
    path_params: OauthAuthorizationsGetGrantPathParams = field()
    

@dataclass
class OauthAuthorizationsGetGrantResponse:
    content_type: str = field()
    status_code: int = field()
    application_grant: Optional[shared.ApplicationGrant] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
