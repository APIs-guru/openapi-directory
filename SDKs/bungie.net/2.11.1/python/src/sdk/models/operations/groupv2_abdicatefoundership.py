from dataclasses import dataclass, field



@dataclass
class GroupV2AbdicateFoundershipPathParams:
    founder_id_new: int = field(default=None, metadata={'path_param': { 'field_name': 'founderIdNew', 'style': 'simple', 'explode': False }})
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2AbdicateFoundershipRequest:
    path_params: GroupV2AbdicateFoundershipPathParams = field(default=None)
    

@dataclass
class GroupV2AbdicateFoundershipResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
