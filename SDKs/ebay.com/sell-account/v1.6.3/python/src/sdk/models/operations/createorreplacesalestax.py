from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateOrReplaceSalesTaxPathParams:
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOrReplaceSalesTaxSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateOrReplaceSalesTaxRequest:
    path_params: CreateOrReplaceSalesTaxPathParams = field(default=None)
    request: shared.SalesTaxBase = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateOrReplaceSalesTaxSecurity = field(default=None)
    

@dataclass
class CreateOrReplaceSalesTaxResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
