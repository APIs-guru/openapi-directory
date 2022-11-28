from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OrgsListSamlSsoAuthorizationsPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListSamlSsoAuthorizationsRequest:
    path_params: OrgsListSamlSsoAuthorizationsPathParams = field()
    

@dataclass
class OrgsListSamlSsoAuthorizationsResponse:
    content_type: str = field()
    status_code: int = field()
    credential_authorizations: Optional[List[shared.CredentialAuthorization]] = field(default=None)
    
