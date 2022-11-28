from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRiddleQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRiddleSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRiddleRequest:
    query_params: GetRiddleQueryParams = field()
    security: GetRiddleSecurity = field()
    

@dataclass
class GetRiddleResponse:
    content_type: str = field()
    status_code: int = field()
    
