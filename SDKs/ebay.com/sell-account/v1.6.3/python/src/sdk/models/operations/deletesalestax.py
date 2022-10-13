from dataclasses import dataclass, field



@dataclass
class DeleteSalesTaxPathParams:
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSalesTaxSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSalesTaxRequest:
    path_params: DeleteSalesTaxPathParams = field(default=None)
    security: DeleteSalesTaxSecurity = field(default=None)
    

@dataclass
class DeleteSalesTaxResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
