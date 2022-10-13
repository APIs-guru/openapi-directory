from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AccountGetLogsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetLogsRequest:
    security: AccountGetLogsSecurity = field(default=None)
    

@dataclass
class AccountGetLogsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    log_list: Optional[shared.LogList] = field(default=None)
    
