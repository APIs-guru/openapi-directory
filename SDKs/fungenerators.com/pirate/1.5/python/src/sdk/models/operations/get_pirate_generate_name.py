from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPirateGenerateNameQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'variation', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPirateGenerateNameSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPirateGenerateNameRequest:
    query_params: GetPirateGenerateNameQueryParams = field()
    security: GetPirateGenerateNameSecurity = field()
    

@dataclass
class GetPirateGenerateNameResponse:
    content_type: str = field()
    status_code: int = field()
    
