from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteAbusesAbuseIDPathParams:
    abuse_id: int = field(metadata={'path_param': { 'field_name': 'abuseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAbusesAbuseIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAbusesAbuseIDRequest:
    path_params: DeleteAbusesAbuseIDPathParams = field()
    security: DeleteAbusesAbuseIDSecurity = field()
    

@dataclass
class DeleteAbusesAbuseIDResponse:
    content_type: str = field()
    status_code: int = field()
    
