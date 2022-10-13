from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    sender_name: str = field(default=None, metadata={'path_param': { 'field_name': 'senderName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest:
    path_params: GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams = field(default=None)
    security: GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity = field(default=None)
    

@dataclass
class GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
    content_type: str = field(default=None)
    sender: Optional[shared.Sender] = field(default=None)
    status_code: int = field(default=None)
    
