from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPirateGenerateNameQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'variation', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPirateGenerateNameSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPirateGenerateNameRequest:
    query_params: GetPirateGenerateNameQueryParams = field(default=None)
    security: GetPirateGenerateNameSecurity = field(default=None)
    

@dataclass
class GetPirateGenerateNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
