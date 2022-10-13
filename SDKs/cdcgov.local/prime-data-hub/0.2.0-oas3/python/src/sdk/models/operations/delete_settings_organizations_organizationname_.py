from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSettingsOrganizationsOrganizationNamePathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameRequest:
    path_params: DeleteSettingsOrganizationsOrganizationNamePathParams = field(default=None)
    security: DeleteSettingsOrganizationsOrganizationNameSecurity = field(default=None)
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameResponse:
    content_type: str = field(default=None)
    organization: Optional[shared.Organization] = field(default=None)
    status_code: int = field(default=None)
    
