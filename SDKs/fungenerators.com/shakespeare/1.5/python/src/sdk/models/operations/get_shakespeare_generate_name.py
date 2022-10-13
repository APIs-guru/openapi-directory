from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetShakespeareGenerateNameQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'variation', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShakespeareGenerateNameSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareGenerateNameRequest:
    query_params: GetShakespeareGenerateNameQueryParams = field(default=None)
    security: GetShakespeareGenerateNameSecurity = field(default=None)
    

@dataclass
class GetShakespeareGenerateNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
