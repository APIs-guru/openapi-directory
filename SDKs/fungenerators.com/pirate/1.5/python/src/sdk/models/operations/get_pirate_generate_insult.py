from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPirateGenerateInsultQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPirateGenerateInsultSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPirateGenerateInsultRequest:
    query_params: GetPirateGenerateInsultQueryParams = field()
    security: GetPirateGenerateInsultSecurity = field()
    

@dataclass
class GetPirateGenerateInsultResponse:
    content_type: str = field()
    status_code: int = field()
    
