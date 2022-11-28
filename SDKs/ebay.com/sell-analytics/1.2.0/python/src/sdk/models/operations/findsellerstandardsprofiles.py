from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindSellerStandardsProfilesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FindSellerStandardsProfilesRequest:
    security: FindSellerStandardsProfilesSecurity = field()
    

@dataclass
class FindSellerStandardsProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    find_seller_standards_profiles_response: Optional[shared.FindSellerStandardsProfilesResponse] = field(default=None)
    
