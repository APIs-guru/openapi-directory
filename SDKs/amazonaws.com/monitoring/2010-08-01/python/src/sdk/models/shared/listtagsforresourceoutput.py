from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListTagsForResourceOutput:
    tags: Optional[List[Tag]] = field(default=None)
    
