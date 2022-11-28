from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSalesTaxPathParams:
    country_code: str = field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = field(metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSalesTaxSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesTaxRequest:
    path_params: GetSalesTaxPathParams = field()
    security: GetSalesTaxSecurity = field()
    

@dataclass
class GetSalesTaxResponse:
    content_type: str = field()
    status_code: int = field()
    sales_tax: Optional[shared.SalesTax] = field(default=None)
    
