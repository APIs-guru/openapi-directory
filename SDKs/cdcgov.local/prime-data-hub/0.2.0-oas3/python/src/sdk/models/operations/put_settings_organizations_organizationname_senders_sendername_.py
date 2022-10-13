from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    sender_name: str = field(default=None, metadata={'path_param': { 'field_name': 'senderName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest:
    path_params: PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams = field(default=None)
    request: Optional[shared.Sender] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity = field(default=None)
    

@dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
    content_type: str = field(default=None)
    senders: Optional[List[shared.Sender]] = field(default=None)
    status_code: int = field(default=None)
    
