from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversPathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversRequest:
    path_params: GetSettingsOrganizationsOrganizationNameReceiversPathParams = field(default=None)
    security: GetSettingsOrganizationsOrganizationNameReceiversSecurity = field(default=None)
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversResponse:
    content_type: str = field(default=None)
    receivers: Optional[List[shared.Receiver]] = field(default=None)
    status_code: int = field(default=None)
    
