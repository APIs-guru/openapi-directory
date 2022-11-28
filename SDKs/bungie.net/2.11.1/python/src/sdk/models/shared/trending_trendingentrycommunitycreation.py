from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TrendingTrendingEntryCommunityCreation:
    author: Optional[str] = field(default=None)
    author_membership_id: Optional[int] = field(default=None)
    body: Optional[str] = field(default=None)
    media: Optional[str] = field(default=None)
    post_id: Optional[int] = field(default=None)
    title: Optional[str] = field(default=None)
    upvotes: Optional[int] = field(default=None)
    
