from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ImagesListResponse:
    images: Optional[List[Image]] = field(default=None)
    
