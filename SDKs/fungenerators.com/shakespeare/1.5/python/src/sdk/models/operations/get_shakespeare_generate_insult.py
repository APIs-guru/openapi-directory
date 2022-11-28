from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShakespeareGenerateInsultQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShakespeareGenerateInsultSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareGenerateInsultRequest:
    query_params: GetShakespeareGenerateInsultQueryParams = field()
    security: GetShakespeareGenerateInsultSecurity = field()
    

@dataclass
class GetShakespeareGenerateInsultResponse:
    content_type: str = field()
    status_code: int = field()
    
