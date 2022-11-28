from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ImagesDeleteAllResponse:
    deleted: Optional[List[Image]] = field(default=None)
    
