from dataclasses import dataclass, field



@dataclass
class GroupV2RecoverGroupForFounderPathParams:
    group_type: int = field(default=None, metadata={'path_param': { 'field_name': 'groupType', 'style': 'simple', 'explode': False }})
    membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2RecoverGroupForFounderRequest:
    path_params: GroupV2RecoverGroupForFounderPathParams = field(default=None)
    

@dataclass
class GroupV2RecoverGroupForFounderResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
