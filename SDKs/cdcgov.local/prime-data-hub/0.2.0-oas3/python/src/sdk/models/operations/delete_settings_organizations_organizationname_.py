from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSettingsOrganizationsOrganizationNamePathParams:
    organization_name: str = field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameRequest:
    path_params: DeleteSettingsOrganizationsOrganizationNamePathParams = field()
    security: DeleteSettingsOrganizationsOrganizationNameSecurity = field()
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameResponse:
    content_type: str = field()
    status_code: int = field()
    organization: Optional[shared.Organization] = field(default=None)
    
