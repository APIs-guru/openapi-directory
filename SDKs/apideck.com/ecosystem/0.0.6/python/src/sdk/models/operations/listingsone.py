from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListingsOnePathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListingsOneRequest:
    path_params: ListingsOnePathParams = field()
    

@dataclass
class ListingsOneResponse:
    content_type: str = field()
    status_code: int = field()
    get_listing_response: Optional[shared.GetListingResponse] = field(default=None)
    
