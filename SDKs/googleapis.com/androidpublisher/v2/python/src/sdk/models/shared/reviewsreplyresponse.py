from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ReviewsReplyResponse:
    result: Optional[ReviewReplyResult] = field(default=None)
    
