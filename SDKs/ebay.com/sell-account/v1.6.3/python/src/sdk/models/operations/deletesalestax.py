from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteSalesTaxPathParams:
    country_code: str = field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = field(metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSalesTaxSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSalesTaxRequest:
    path_params: DeleteSalesTaxPathParams = field()
    security: DeleteSalesTaxSecurity = field()
    

@dataclass
class DeleteSalesTaxResponse:
    content_type: str = field()
    status_code: int = field()
    
