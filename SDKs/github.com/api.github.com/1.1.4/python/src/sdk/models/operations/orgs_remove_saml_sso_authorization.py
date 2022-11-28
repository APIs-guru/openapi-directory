from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsRemoveSamlSsoAuthorizationPathParams:
    credential_id: int = field(metadata={'path_param': { 'field_name': 'credential_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsRemoveSamlSsoAuthorizationRequest:
    path_params: OrgsRemoveSamlSsoAuthorizationPathParams = field()
    

@dataclass
class OrgsRemoveSamlSsoAuthorizationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
