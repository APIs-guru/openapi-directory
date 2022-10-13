from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsOrganizationNameSendersPathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersRequest:
    path_params: GetSettingsOrganizationsOrganizationNameSendersPathParams = field(default=None)
    security: GetSettingsOrganizationsOrganizationNameSendersSecurity = field(default=None)
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersResponse:
    content_type: str = field(default=None)
    senders: Optional[List[shared.Sender]] = field(default=None)
    status_code: int = field(default=None)
    
