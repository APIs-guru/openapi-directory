from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRiddleRandomQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRiddleRandomSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRiddleRandomRequest:
    query_params: GetRiddleRandomQueryParams = field()
    security: GetRiddleRandomSecurity = field()
    

@dataclass
class GetRiddleRandomResponse:
    content_type: str = field()
    status_code: int = field()
    
