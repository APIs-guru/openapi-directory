from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentCommentSummary:
    comment_count: Optional[int] = field(default=None)
    topic_id: Optional[int] = field(default=None)
    
