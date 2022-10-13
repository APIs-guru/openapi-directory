from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetShakespeareGenerateInsultQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShakespeareGenerateInsultSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareGenerateInsultRequest:
    query_params: GetShakespeareGenerateInsultQueryParams = field(default=None)
    security: GetShakespeareGenerateInsultSecurity = field(default=None)
    

@dataclass
class GetShakespeareGenerateInsultResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
