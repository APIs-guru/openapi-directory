from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReisezentrenQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReisezentrenRequest:
    query_params: GetReisezentrenQueryParams = field(default=None)
    

@dataclass
class GetReisezentrenResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    travel_center_list: Optional[List[shared.TravelCenter]] = field(default=None)
    
