from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSettingsOrganizationsOrganizationNamePathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameRequest:
    path_params: PutSettingsOrganizationsOrganizationNamePathParams = field(default=None)
    request: Optional[shared.Organization] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutSettingsOrganizationsOrganizationNameSecurity = field(default=None)
    

@dataclass
class PutSettingsOrganizationsOrganizationNameResponse:
    content_type: str = field(default=None)
    organization: Optional[shared.Organization] = field(default=None)
    status_code: int = field(default=None)
    
