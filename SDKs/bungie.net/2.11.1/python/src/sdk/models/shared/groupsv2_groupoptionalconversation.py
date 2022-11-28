from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupsV2GroupOptionalConversation:
    chat_enabled: Optional[bool] = field(default=None)
    chat_name: Optional[str] = field(default=None)
    chat_security: Optional[int] = field(default=None)
    conversation_id: Optional[int] = field(default=None)
    group_id: Optional[int] = field(default=None)
    
