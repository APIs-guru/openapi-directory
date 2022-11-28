from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class AccountDeleteSessionsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountDeleteSessionsRequest:
    security: AccountDeleteSessionsSecurity = field()
    

@dataclass
class AccountDeleteSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    
