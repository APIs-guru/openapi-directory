from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ApksListResponse:
    apks: Optional[List[Apk]] = field(default=None)
    kind: Optional[str] = field(default=None)
    
