from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class BinLookupPathParams:
    bin: str = field(metadata={'path_param': { 'field_name': 'bin', 'style': 'simple', 'explode': False }})
    

@dataclass
class BinLookupQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class BinLookupRequest:
    path_params: BinLookupPathParams = field()
    query_params: BinLookupQueryParams = field()
    

@dataclass
class BinLookupResponse:
    content_type: str = field()
    status_code: int = field()
    response_items: Optional[List[shared.ResponseItem]] = field(default=None)
    
