from dataclasses import dataclass, field
from typing import List


@dataclass
class HeadSettingsOrganizationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class HeadSettingsOrganizationsRequest:
    security: HeadSettingsOrganizationsSecurity = field(default=None)
    

@dataclass
class HeadSettingsOrganizationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
