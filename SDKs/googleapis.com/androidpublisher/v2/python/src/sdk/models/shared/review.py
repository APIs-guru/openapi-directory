from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Review:
    author_name: Optional[str] = field(default=None)
    comments: Optional[List[Comment]] = field(default=None)
    review_id: Optional[str] = field(default=None)
    
