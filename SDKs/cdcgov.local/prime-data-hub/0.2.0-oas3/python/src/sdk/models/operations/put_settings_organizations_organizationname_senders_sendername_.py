from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams:
    organization_name: str = field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    sender_name: str = field(metadata={'path_param': { 'field_name': 'senderName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest:
    path_params: PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams = field()
    security: PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity = field()
    request: Optional[shared.SenderInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
    content_type: str = field()
    status_code: int = field()
    senders: Optional[List[shared.Sender]] = field(default=None)
    
