from dataclasses import dataclass, field



@dataclass
class GroupV2ApproveAllPendingPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2ApproveAllPendingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2ApproveAllPendingRequest:
    path_params: GroupV2ApproveAllPendingPathParams = field(default=None)
    security: GroupV2ApproveAllPendingSecurity = field(default=None)
    

@dataclass
class GroupV2ApproveAllPendingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
