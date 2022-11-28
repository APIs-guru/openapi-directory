from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPirateGenerateLoremIpsumQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPirateGenerateLoremIpsumSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPirateGenerateLoremIpsumRequest:
    query_params: GetPirateGenerateLoremIpsumQueryParams = field()
    security: GetPirateGenerateLoremIpsumSecurity = field()
    

@dataclass
class GetPirateGenerateLoremIpsumResponse:
    content_type: str = field()
    status_code: int = field()
    
