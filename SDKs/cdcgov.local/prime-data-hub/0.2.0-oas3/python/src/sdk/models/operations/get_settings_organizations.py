from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsRequest:
    security: GetSettingsOrganizationsSecurity = field()
    

@dataclass
class GetSettingsOrganizationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    organizations: Optional[List[shared.Organization]] = field(default=None)
    
