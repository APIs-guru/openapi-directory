from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TagListMessage:
    tag_list: Optional[List[Tag]] = field(default=None)
    
