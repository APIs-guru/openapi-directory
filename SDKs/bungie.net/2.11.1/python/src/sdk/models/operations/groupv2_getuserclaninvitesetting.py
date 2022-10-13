from dataclasses import dataclass, field



@dataclass
class GroupV2GetUserClanInviteSettingPathParams:
    m_type: int = field(default=None, metadata={'path_param': { 'field_name': 'mType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetUserClanInviteSettingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2GetUserClanInviteSettingRequest:
    path_params: GroupV2GetUserClanInviteSettingPathParams = field(default=None)
    security: GroupV2GetUserClanInviteSettingSecurity = field(default=None)
    

@dataclass
class GroupV2GetUserClanInviteSettingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
