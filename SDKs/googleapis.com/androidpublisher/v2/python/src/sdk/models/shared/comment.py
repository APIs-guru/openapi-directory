from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Comment:
    developer_comment: Optional[DeveloperComment] = field(default=None)
    user_comment: Optional[UserComment] = field(default=None)
    
