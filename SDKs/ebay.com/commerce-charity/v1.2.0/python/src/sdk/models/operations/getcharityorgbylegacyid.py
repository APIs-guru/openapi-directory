from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCharityOrgByLegacyIDQueryParams:
    legacy_charity_org_id: str = field(default=None, metadata={'query_param': { 'field_name': 'legacy_charity_org_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCharityOrgByLegacyIDHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID' }})
    

@dataclass
class GetCharityOrgByLegacyIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCharityOrgByLegacyIDRequest:
    query_params: GetCharityOrgByLegacyIDQueryParams = field(default=None)
    headers: GetCharityOrgByLegacyIDHeaders = field(default=None)
    security: GetCharityOrgByLegacyIDSecurity = field(default=None)
    

@dataclass
class GetCharityOrgByLegacyIDResponse:
    charity_org: Optional[shared.CharityOrg] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
