from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCharityOrgByLegacyIDQueryParams:
    legacy_charity_org_id: str = field(metadata={'query_param': { 'field_name': 'legacy_charity_org_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCharityOrgByLegacyIDHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCharityOrgByLegacyIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCharityOrgByLegacyIDRequest:
    headers: GetCharityOrgByLegacyIDHeaders = field()
    query_params: GetCharityOrgByLegacyIDQueryParams = field()
    security: GetCharityOrgByLegacyIDSecurity = field()
    

@dataclass
class GetCharityOrgByLegacyIDResponse:
    content_type: str = field()
    status_code: int = field()
    charity_org: Optional[shared.CharityOrg] = field(default=None)
    
