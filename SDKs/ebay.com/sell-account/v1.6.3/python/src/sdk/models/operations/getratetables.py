from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRateTablesQueryParams:
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country_code', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRateTablesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRateTablesRequest:
    query_params: GetRateTablesQueryParams = field()
    security: GetRateTablesSecurity = field()
    

@dataclass
class GetRateTablesResponse:
    content_type: str = field()
    status_code: int = field()
    rate_table_response: Optional[shared.RateTableResponse] = field(default=None)
    
