from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams:
    organization_name: str = field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    receiver_name: str = field(metadata={'path_param': { 'field_name': 'receiverName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest:
    path_params: GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams = field()
    security: GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity = field()
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse:
    content_type: str = field()
    status_code: int = field()
    receiver: Optional[shared.Receiver] = field(default=None)
    
