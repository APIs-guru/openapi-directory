from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFactRandomQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    subcategory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subcategory', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactRandomSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactRandomRequest:
    query_params: GetFactRandomQueryParams = field()
    security: GetFactRandomSecurity = field()
    

@dataclass
class GetFactRandomResponse:
    content_type: str = field()
    status_code: int = field()
    
