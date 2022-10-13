from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    receiver_name: str = field(default=None, metadata={'path_param': { 'field_name': 'receiverName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest:
    path_params: GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams = field(default=None)
    security: GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity = field(default=None)
    

@dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse:
    content_type: str = field(default=None)
    receiver: Optional[shared.Receiver] = field(default=None)
    status_code: int = field(default=None)
    
