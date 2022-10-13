from dataclasses import dataclass, field
from typing import List


@dataclass
class GroupV2DenyPendingForListPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2DenyPendingForListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2DenyPendingForListRequest:
    path_params: GroupV2DenyPendingForListPathParams = field(default=None)
    security: GroupV2DenyPendingForListSecurity = field(default=None)
    

@dataclass
class GroupV2DenyPendingForListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
