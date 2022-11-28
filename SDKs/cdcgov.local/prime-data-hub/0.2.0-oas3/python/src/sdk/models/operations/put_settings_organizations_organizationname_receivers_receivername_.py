from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams:
    organization_name: str = field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    receiver_name: str = field(metadata={'path_param': { 'field_name': 'receiverName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest:
    path_params: PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams = field()
    security: PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity = field()
    request: Optional[shared.ReceiverInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse:
    content_type: str = field()
    status_code: int = field()
    receiver: Optional[shared.Receiver] = field(default=None)
    
