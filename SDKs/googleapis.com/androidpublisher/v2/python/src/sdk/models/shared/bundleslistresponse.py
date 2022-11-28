from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class BundlesListResponse:
    bundles: Optional[List[Bundle]] = field(default=None)
    kind: Optional[str] = field(default=None)
    
