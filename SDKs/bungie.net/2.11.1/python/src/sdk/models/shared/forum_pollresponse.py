from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ForumPollResponse:
    results: Optional[List[ForumPollResult]] = field(default=None)
    topic_id: Optional[int] = field(default=None)
    total_votes: Optional[int] = field(default=None)
    
