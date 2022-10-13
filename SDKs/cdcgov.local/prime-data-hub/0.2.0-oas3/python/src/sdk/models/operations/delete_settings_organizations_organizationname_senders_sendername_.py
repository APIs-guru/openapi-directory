from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams:
    organization_name: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    sender_name: str = field(default=None, metadata={'path_param': { 'field_name': 'senderName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest:
    path_params: DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams = field(default=None)
    security: DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity = field(default=None)
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
    content_type: str = field(default=None)
    sender: Optional[shared.Sender] = field(default=None)
    status_code: int = field(default=None)
    
