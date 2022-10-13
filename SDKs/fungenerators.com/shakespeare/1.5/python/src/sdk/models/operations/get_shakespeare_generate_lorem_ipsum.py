from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetShakespeareGenerateLoremIpsumQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShakespeareGenerateLoremIpsumSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareGenerateLoremIpsumRequest:
    query_params: GetShakespeareGenerateLoremIpsumQueryParams = field(default=None)
    security: GetShakespeareGenerateLoremIpsumSecurity = field(default=None)
    

@dataclass
class GetShakespeareGenerateLoremIpsumResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
