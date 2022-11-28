from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetPublicVendorsQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    

@dataclass
class Destiny2GetPublicVendorsRequest:
    query_params: Destiny2GetPublicVendorsQueryParams = field()
    

@dataclass
class Destiny2GetPublicVendorsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
