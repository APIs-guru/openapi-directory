from dataclasses import dataclass, field



@dataclass
class GroupV2GetGroupPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetGroupRequest:
    path_params: GroupV2GetGroupPathParams = field(default=None)
    

@dataclass
class GroupV2GetGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
