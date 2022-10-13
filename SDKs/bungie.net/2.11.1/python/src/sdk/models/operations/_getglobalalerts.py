from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DotGetGlobalAlertsQueryParams:
    includestreaming: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includestreaming', 'style': 'form', 'explode': True }})
    

@dataclass
class DotGetGlobalAlertsRequest:
    query_params: DotGetGlobalAlertsQueryParams = field(default=None)
    

@dataclass
class DotGetGlobalAlertsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
