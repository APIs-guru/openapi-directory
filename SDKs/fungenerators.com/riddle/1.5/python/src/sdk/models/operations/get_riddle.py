from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRiddleQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRiddleSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRiddleRequest:
    query_params: GetRiddleQueryParams = field(default=None)
    security: GetRiddleSecurity = field(default=None)
    

@dataclass
class GetRiddleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
