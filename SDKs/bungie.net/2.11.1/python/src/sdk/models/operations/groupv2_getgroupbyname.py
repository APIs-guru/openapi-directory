from dataclasses import dataclass, field



@dataclass
class GroupV2GetGroupByNamePathParams:
    group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'groupName', 'style': 'simple', 'explode': False }})
    group_type: int = field(default=None, metadata={'path_param': { 'field_name': 'groupType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetGroupByNameRequest:
    path_params: GroupV2GetGroupByNamePathParams = field(default=None)
    

@dataclass
class GroupV2GetGroupByNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
