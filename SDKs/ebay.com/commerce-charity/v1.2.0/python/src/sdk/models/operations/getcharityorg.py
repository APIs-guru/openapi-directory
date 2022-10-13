from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCharityOrgPathParams:
    charity_org_id: str = field(default=None, metadata={'path_param': { 'field_name': 'charity_org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCharityOrgHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID' }})
    

@dataclass
class GetCharityOrgSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCharityOrgRequest:
    path_params: GetCharityOrgPathParams = field(default=None)
    headers: GetCharityOrgHeaders = field(default=None)
    security: GetCharityOrgSecurity = field(default=None)
    

@dataclass
class GetCharityOrgResponse:
    charity_org: Optional[shared.CharityOrg] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
