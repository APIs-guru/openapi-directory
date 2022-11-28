from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListingsListResponse:
    kind: Optional[str] = field(default=None)
    listings: Optional[List[Listing]] = field(default=None)
    
