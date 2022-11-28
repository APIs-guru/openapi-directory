from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetGroupOptionalConversationsPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetGroupOptionalConversationsRequest:
    path_params: GroupV2GetGroupOptionalConversationsPathParams = field()
    

@dataclass
class GroupV2GetGroupOptionalConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
