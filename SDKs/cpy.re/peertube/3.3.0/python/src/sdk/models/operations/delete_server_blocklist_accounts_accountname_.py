from dataclasses import dataclass, field



@dataclass
class DeleteServerBlocklistAccountsAccountNamePathParams:
    account_name: str = field(default=None, metadata={'path_param': { 'field_name': 'accountName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServerBlocklistAccountsAccountNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServerBlocklistAccountsAccountNameRequest:
    path_params: DeleteServerBlocklistAccountsAccountNamePathParams = field(default=None)
    security: DeleteServerBlocklistAccountsAccountNameSecurity = field(default=None)
    

@dataclass
class DeleteServerBlocklistAccountsAccountNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
