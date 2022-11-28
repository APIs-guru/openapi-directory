from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2GetUserClanInviteSettingPathParams:
    m_type: int = field(metadata={'path_param': { 'field_name': 'mType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetUserClanInviteSettingSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2GetUserClanInviteSettingRequest:
    path_params: GroupV2GetUserClanInviteSettingPathParams = field()
    security: GroupV2GetUserClanInviteSettingSecurity = field()
    

@dataclass
class GroupV2GetUserClanInviteSettingResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
