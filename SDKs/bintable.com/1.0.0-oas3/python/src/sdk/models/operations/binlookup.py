from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class BinLookupPathParams:
    bin: str = field(default=None, metadata={'path_param': { 'field_name': 'bin', 'style': 'simple', 'explode': False }})
    

@dataclass
class BinLookupQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class BinLookupRequest:
    path_params: BinLookupPathParams = field(default=None)
    query_params: BinLookupQueryParams = field(default=None)
    

@dataclass
class BinLookupResponse:
    content_type: str = field(default=None)
    response_items: Optional[List[shared.ResponseItem]] = field(default=None)
    status_code: int = field(default=None)
    
