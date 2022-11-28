from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ForumForumRecruitmentDetail:
    fireteam: Optional[List[UserGeneralUser]] = field(default=None)
    approved: Optional[bool] = field(default=None)
    conversation_id: Optional[int] = field(default=None)
    intensity: Optional[int] = field(default=None)
    kicked_player_ids: Optional[List[int]] = field(default=None)
    microphone_required: Optional[bool] = field(default=None)
    player_slots_remaining: Optional[int] = field(default=None)
    player_slots_total: Optional[int] = field(default=None)
    tone: Optional[int] = field(default=None)
    topic_id: Optional[int] = field(default=None)
    
