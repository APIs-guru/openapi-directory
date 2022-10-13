from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EurekaInfoQueryParams:
    nonce: int = field(default=None, metadata={'query_param': { 'field_name': 'nonce', 'style': 'form', 'explode': True }})
    options: str = field(default=None, metadata={'query_param': { 'field_name': 'options', 'style': 'form', 'explode': True }})
    params: str = field(default=None, metadata={'query_param': { 'field_name': 'params', 'style': 'form', 'explode': True }})
    

@dataclass
class EurekaInfoRequest:
    query_params: EurekaInfoQueryParams = field(default=None)
    

@dataclass
class EurekaInfoResponse:
    content_type: str = field(default=None)
    example1: Optional[shared.Example1] = field(default=None)
    status_code: int = field(default=None)
    
