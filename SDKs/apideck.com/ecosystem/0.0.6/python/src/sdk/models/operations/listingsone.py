from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListingsOnePathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListingsOneRequest:
    path_params: ListingsOnePathParams = field(default=None)
    

@dataclass
class ListingsOneResponse:
    content_type: str = field(default=None)
    get_listing_response: Optional[shared.GetListingResponse] = field(default=None)
    status_code: int = field(default=None)
    
