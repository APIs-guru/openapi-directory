from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSalesTaxPathParams:
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSalesTaxSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesTaxRequest:
    path_params: GetSalesTaxPathParams = field(default=None)
    security: GetSalesTaxSecurity = field(default=None)
    

@dataclass
class GetSalesTaxResponse:
    content_type: str = field(default=None)
    sales_tax: Optional[shared.SalesTax] = field(default=None)
    status_code: int = field(default=None)
    
