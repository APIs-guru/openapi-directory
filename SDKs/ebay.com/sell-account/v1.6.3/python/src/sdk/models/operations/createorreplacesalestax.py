from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateOrReplaceSalesTaxPathParams:
    country_code: str = field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = field(metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOrReplaceSalesTaxSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateOrReplaceSalesTaxRequest:
    path_params: CreateOrReplaceSalesTaxPathParams = field()
    request: shared.SalesTaxBase = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateOrReplaceSalesTaxSecurity = field()
    

@dataclass
class CreateOrReplaceSalesTaxResponse:
    content_type: str = field()
    status_code: int = field()
    
