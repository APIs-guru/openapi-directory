from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class HeadSettingsOrganizationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class HeadSettingsOrganizationsRequest:
    security: HeadSettingsOrganizationsSecurity = field()
    

@dataclass
class HeadSettingsOrganizationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
