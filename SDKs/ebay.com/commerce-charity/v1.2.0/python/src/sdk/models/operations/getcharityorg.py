from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCharityOrgPathParams:
    charity_org_id: str = field(metadata={'path_param': { 'field_name': 'charity_org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCharityOrgHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCharityOrgSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCharityOrgRequest:
    headers: GetCharityOrgHeaders = field()
    path_params: GetCharityOrgPathParams = field()
    security: GetCharityOrgSecurity = field()
    

@dataclass
class GetCharityOrgResponse:
    content_type: str = field()
    status_code: int = field()
    charity_org: Optional[shared.CharityOrg] = field(default=None)
    
