from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EaseeSessionsQueryParams:
    password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class EaseeSessionsRequest:
    query_params: EaseeSessionsQueryParams = field(default=None)
    

@dataclass
class EaseeSessionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    easee_chargers: Optional[List[shared.EaseeCharger]] = field(default=None)
    
