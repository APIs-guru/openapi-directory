from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ReviewReplyResult:
    last_edited: Optional[Timestamp] = field(default=None)
    reply_text: Optional[str] = field(default=None)
    
