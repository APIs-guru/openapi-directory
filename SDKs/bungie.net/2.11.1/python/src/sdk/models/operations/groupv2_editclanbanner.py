from dataclasses import dataclass, field



@dataclass
class GroupV2EditClanBannerPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2EditClanBannerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2EditClanBannerRequest:
    path_params: GroupV2EditClanBannerPathParams = field(default=None)
    security: GroupV2EditClanBannerSecurity = field(default=None)
    

@dataclass
class GroupV2EditClanBannerResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
