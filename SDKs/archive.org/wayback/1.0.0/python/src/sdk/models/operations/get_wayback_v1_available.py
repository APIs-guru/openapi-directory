from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetWaybackV1AvailableQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    closest: Optional[shared.ClosestEnum] = field(default=None, metadata={'query_param': { 'field_name': 'closest', 'style': 'form', 'explode': True }})
    status_code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'status_code', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    timeout: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    timestamp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWaybackV1AvailableRequest:
    query_params: GetWaybackV1AvailableQueryParams = field()
    

@dataclass
class GetWaybackV1AvailableResponse:
    content_type: str = field()
    status_code: int = field()
    availability_results: Optional[shared.AvailabilityResults] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
