from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsRemoveSamlSsoAuthorizationPathParams:
    credential_id: int = field(default=None, metadata={'path_param': { 'field_name': 'credential_id', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsRemoveSamlSsoAuthorizationRequest:
    path_params: OrgsRemoveSamlSsoAuthorizationPathParams = field(default=None)
    

@dataclass
class OrgsRemoveSamlSsoAuthorizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
