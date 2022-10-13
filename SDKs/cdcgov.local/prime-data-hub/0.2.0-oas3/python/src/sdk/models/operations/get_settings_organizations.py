from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsRequest:
    security: GetSettingsOrganizationsSecurity = field(default=None)
    

@dataclass
class GetSettingsOrganizationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    organizations: Optional[List[shared.Organization]] = field(default=None)
    status_code: int = field(default=None)
    
