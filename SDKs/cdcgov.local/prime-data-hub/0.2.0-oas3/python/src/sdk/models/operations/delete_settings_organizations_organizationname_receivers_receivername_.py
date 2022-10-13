from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    receiver_name: str = field(default=None, metadata={'path_param': { 'field_name': 'receiverName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest:
    path_params: DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams = field(default=None)
    security: DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity = field(default=None)
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse:
    content_type: str = field(default=None)
    receiver: Optional[shared.Receiver] = field(default=None)
    status_code: int = field(default=None)
    
