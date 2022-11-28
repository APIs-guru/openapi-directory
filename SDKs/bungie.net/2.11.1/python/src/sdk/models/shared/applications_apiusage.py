from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ApplicationsAPIUsage:
    api_calls: Optional[List[ApplicationsSeries]] = field(default=None)
    throttled_requests: Optional[List[ApplicationsSeries]] = field(default=None)
    
