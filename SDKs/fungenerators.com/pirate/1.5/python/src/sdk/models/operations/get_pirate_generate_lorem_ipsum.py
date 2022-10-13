from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPirateGenerateLoremIpsumQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPirateGenerateLoremIpsumSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPirateGenerateLoremIpsumRequest:
    query_params: GetPirateGenerateLoremIpsumQueryParams = field(default=None)
    security: GetPirateGenerateLoremIpsumSecurity = field(default=None)
    

@dataclass
class GetPirateGenerateLoremIpsumResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
