from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetGroupOptionalConversationsPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetGroupOptionalConversationsRequest:
    path_params: GroupV2GetGroupOptionalConversationsPathParams = field(default=None)
    

@dataclass
class GroupV2GetGroupOptionalConversationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
