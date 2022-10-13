from dataclasses import dataclass, field



@dataclass
class GroupV2EditGroupPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2EditGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2EditGroupRequest:
    path_params: GroupV2EditGroupPathParams = field(default=None)
    security: GroupV2EditGroupSecurity = field(default=None)
    

@dataclass
class GroupV2EditGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
