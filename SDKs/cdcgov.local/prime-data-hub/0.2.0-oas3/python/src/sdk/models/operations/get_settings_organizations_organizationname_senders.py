from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsOrganizationNameSendersPathParams:
    organization_name: str = field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersRequest:
    path_params: GetSettingsOrganizationsOrganizationNameSendersPathParams = field()
    security: GetSettingsOrganizationsOrganizationNameSendersSecurity = field()
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersResponse:
    content_type: str = field()
    status_code: int = field()
    senders: Optional[List[shared.Sender]] = field(default=None)
    
