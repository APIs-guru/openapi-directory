from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShakespeareGenerateNameQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'variation', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShakespeareGenerateNameSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareGenerateNameRequest:
    query_params: GetShakespeareGenerateNameQueryParams = field()
    security: GetShakespeareGenerateNameSecurity = field()
    

@dataclass
class GetShakespeareGenerateNameResponse:
    content_type: str = field()
    status_code: int = field()
    
