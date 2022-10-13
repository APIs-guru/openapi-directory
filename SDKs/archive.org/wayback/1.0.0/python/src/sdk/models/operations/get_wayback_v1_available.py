from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetWaybackV1AvailableQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    closest: Optional[shared.ClosestEnum] = field(default=None, metadata={'query_param': { 'field_name': 'closest', 'style': 'form', 'explode': True }})
    status_code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'status_code', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    timeout: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    timestamp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWaybackV1AvailableRequest:
    query_params: GetWaybackV1AvailableQueryParams = field(default=None)
    

@dataclass
class GetWaybackV1AvailableResponse:
    availability_results: Optional[shared.AvailabilityResults] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
