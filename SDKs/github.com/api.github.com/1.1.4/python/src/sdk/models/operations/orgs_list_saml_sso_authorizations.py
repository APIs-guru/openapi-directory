from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OrgsListSamlSsoAuthorizationsPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListSamlSsoAuthorizationsRequest:
    path_params: OrgsListSamlSsoAuthorizationsPathParams = field(default=None)
    

@dataclass
class OrgsListSamlSsoAuthorizationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    credential_authorizations: Optional[List[shared.CredentialAuthorization]] = field(default=None)
    
