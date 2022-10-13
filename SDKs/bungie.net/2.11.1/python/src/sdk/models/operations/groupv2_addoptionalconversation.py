from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2AddOptionalConversationPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2AddOptionalConversationSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2AddOptionalConversationRequest:
    path_params: GroupV2AddOptionalConversationPathParams = field(default=None)
    security: GroupV2AddOptionalConversationSecurity = field(default=None)
    

@dataclass
class GroupV2AddOptionalConversationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
