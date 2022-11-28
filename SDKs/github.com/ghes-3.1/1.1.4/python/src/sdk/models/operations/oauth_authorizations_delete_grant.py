from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsDeleteGrantPathParams:
    grant_id: int = field(metadata={'path_param': { 'field_name': 'grant_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsDeleteGrantRequest:
    path_params: OauthAuthorizationsDeleteGrantPathParams = field()
    

@dataclass
class OauthAuthorizationsDeleteGrantResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
