from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversPathParams:
    organization_name: str = field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversRequest:
    path_params: GetSettingsOrganizationsOrganizationNameReceiversPathParams = field()
    security: GetSettingsOrganizationsOrganizationNameReceiversSecurity = field()
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversResponse:
    content_type: str = field()
    status_code: int = field()
    receivers: Optional[List[shared.Receiver]] = field(default=None)
    
