from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSalesTaxesQueryParams:
    country_code: str = field(default=None, metadata={'query_param': { 'field_name': 'country_code', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSalesTaxesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesTaxesRequest:
    query_params: GetSalesTaxesQueryParams = field(default=None)
    security: GetSalesTaxesSecurity = field(default=None)
    

@dataclass
class GetSalesTaxesResponse:
    content_type: str = field(default=None)
    sales_taxes: Optional[shared.SalesTaxes] = field(default=None)
    status_code: int = field(default=None)
    
