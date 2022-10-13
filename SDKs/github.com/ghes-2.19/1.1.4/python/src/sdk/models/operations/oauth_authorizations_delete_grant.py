from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsDeleteGrantPathParams:
    grant_id: int = field(default=None, metadata={'path_param': { 'field_name': 'grant_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsDeleteGrantRequest:
    path_params: OauthAuthorizationsDeleteGrantPathParams = field(default=None)
    

@dataclass
class OauthAuthorizationsDeleteGrantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
