from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFactRandomQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    subcategory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subcategory', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactRandomSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactRandomRequest:
    query_params: GetFactRandomQueryParams = field(default=None)
    security: GetFactRandomSecurity = field(default=None)
    

@dataclass
class GetFactRandomResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
