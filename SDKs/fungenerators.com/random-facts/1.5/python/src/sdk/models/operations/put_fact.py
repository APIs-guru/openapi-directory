from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutFactQueryParams:
    category: str = field(metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    fact: str = field(metadata={'query_param': { 'field_name': 'fact', 'style': 'form', 'explode': True }})
    subcategory: str = field(metadata={'query_param': { 'field_name': 'subcategory', 'style': 'form', 'explode': True }})
    tags: str = field(metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class PutFactSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutFactRequest:
    query_params: PutFactQueryParams = field()
    security: PutFactSecurity = field()
    

@dataclass
class PutFactResponse:
    content_type: str = field()
    status_code: int = field()
    
