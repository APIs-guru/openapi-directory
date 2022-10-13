from dataclasses import dataclass, field



@dataclass
class DeleteAbusesAbuseIDPathParams:
    abuse_id: int = field(default=None, metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAbusesAbuseIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAbusesAbuseIDRequest:
    path_params: DeleteAbusesAbuseIDPathParams = field(default=None)
    security: DeleteAbusesAbuseIDSecurity = field(default=None)
    

@dataclass
class DeleteAbusesAbuseIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
