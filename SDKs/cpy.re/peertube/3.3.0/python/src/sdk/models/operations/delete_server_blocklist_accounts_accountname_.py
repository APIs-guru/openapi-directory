from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteServerBlocklistAccountsAccountNamePathParams:
    account_name: str = field(metadata={'path_param': { 'field_name': 'accountName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServerBlocklistAccountsAccountNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServerBlocklistAccountsAccountNameRequest:
    path_params: DeleteServerBlocklistAccountsAccountNamePathParams = field()
    security: DeleteServerBlocklistAccountsAccountNameSecurity = field()
    

@dataclass
class DeleteServerBlocklistAccountsAccountNameResponse:
    content_type: str = field()
    status_code: int = field()
    
