from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DotGetGlobalAlertsQueryParams:
    includestreaming: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includestreaming', 'style': 'form', 'explode': True }})
    

@dataclass
class DotGetGlobalAlertsRequest:
    query_params: DotGetGlobalAlertsQueryParams = field()
    

@dataclass
class DotGetGlobalAlertsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
