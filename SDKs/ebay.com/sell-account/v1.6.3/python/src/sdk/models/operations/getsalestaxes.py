from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSalesTaxesQueryParams:
    country_code: str = field(metadata={'query_param': { 'field_name': 'country_code', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSalesTaxesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesTaxesRequest:
    query_params: GetSalesTaxesQueryParams = field()
    security: GetSalesTaxesSecurity = field()
    

@dataclass
class GetSalesTaxesResponse:
    content_type: str = field()
    status_code: int = field()
    sales_taxes: Optional[shared.SalesTaxes] = field(default=None)
    
