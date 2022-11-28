from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams:
    organization_name: str = field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    sender_name: str = field(metadata={'path_param': { 'field_name': 'senderName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest:
    path_params: DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams = field()
    security: DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity = field()
    

@dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
    content_type: str = field()
    status_code: int = field()
    sender: Optional[shared.Sender] = field(default=None)
    
