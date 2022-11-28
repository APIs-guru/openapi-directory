from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetLogsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetLogsRequest:
    security: AccountGetLogsSecurity = field()
    

@dataclass
class AccountGetLogsResponse:
    content_type: str = field()
    status_code: int = field()
    log_list: Optional[shared.LogList] = field(default=None)
    
