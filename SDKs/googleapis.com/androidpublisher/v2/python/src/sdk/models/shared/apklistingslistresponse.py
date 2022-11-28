from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ApkListingsListResponse:
    kind: Optional[str] = field(default=None)
    listings: Optional[List[ApkListing]] = field(default=None)
    
