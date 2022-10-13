from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetPublicVendorsQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    

@dataclass
class Destiny2GetPublicVendorsRequest:
    query_params: Destiny2GetPublicVendorsQueryParams = field(default=None)
    

@dataclass
class Destiny2GetPublicVendorsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
