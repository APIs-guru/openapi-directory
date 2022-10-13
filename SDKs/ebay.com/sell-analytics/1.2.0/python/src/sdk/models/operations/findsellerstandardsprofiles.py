from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindSellerStandardsProfilesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FindSellerStandardsProfilesRequest:
    security: FindSellerStandardsProfilesSecurity = field(default=None)
    

@dataclass
class FindSellerStandardsProfilesResponse:
    content_type: str = field(default=None)
    find_seller_standards_profiles_response: Optional[shared.FindSellerStandardsProfilesResponse] = field(default=None)
    status_code: int = field(default=None)
    
