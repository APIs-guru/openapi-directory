from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSettingsOrganizationsOrganizationNamePathParams:
    organization_name: str = field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameRequest:
    path_params: PutSettingsOrganizationsOrganizationNamePathParams = field()
    security: PutSettingsOrganizationsOrganizationNameSecurity = field()
    request: Optional[shared.Organization1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameResponse:
    content_type: str = field()
    status_code: int = field()
    organization: Optional[shared.Organization] = field(default=None)
    
