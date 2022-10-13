from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSalesTaxJurisdictionsPathParams:
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSalesTaxJurisdictionsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesTaxJurisdictionsRequest:
    path_params: GetSalesTaxJurisdictionsPathParams = field(default=None)
    security: GetSalesTaxJurisdictionsSecurity = field(default=None)
    

@dataclass
class GetSalesTaxJurisdictionsResponse:
    content_type: str = field(default=None)
    sales_tax_jurisdictions: Optional[shared.SalesTaxJurisdictions] = field(default=None)
    status_code: int = field(default=None)
    
