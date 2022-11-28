from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReisezentrenQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReisezentrenRequest:
    query_params: GetReisezentrenQueryParams = field()
    

@dataclass
class GetReisezentrenResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    travel_center_list: Optional[List[shared.TravelCenter]] = field(default=None)
    
