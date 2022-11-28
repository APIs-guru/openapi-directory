from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2ApprovePendingForListPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2ApprovePendingForListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2ApprovePendingForListRequest:
    path_params: GroupV2ApprovePendingForListPathParams = field()
    security: GroupV2ApprovePendingForListSecurity = field()
    

@dataclass
class GroupV2ApprovePendingForListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
