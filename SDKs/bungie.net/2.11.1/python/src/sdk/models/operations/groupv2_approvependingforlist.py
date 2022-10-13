from dataclasses import dataclass, field
from typing import List


@dataclass
class GroupV2ApprovePendingForListPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2ApprovePendingForListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2ApprovePendingForListRequest:
    path_params: GroupV2ApprovePendingForListPathParams = field(default=None)
    security: GroupV2ApprovePendingForListSecurity = field(default=None)
    

@dataclass
class GroupV2ApprovePendingForListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
