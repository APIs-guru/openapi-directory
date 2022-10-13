from dataclasses import dataclass, field



@dataclass
class GroupV2GetAdminsAndFounderOfGroupPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetAdminsAndFounderOfGroupQueryParams:
    currentpage: int = field(default=None, metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupV2GetAdminsAndFounderOfGroupRequest:
    path_params: GroupV2GetAdminsAndFounderOfGroupPathParams = field(default=None)
    query_params: GroupV2GetAdminsAndFounderOfGroupQueryParams = field(default=None)
    

@dataclass
class GroupV2GetAdminsAndFounderOfGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
