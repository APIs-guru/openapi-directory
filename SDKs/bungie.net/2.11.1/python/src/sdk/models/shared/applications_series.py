from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ApplicationsSeries:
    datapoints: Optional[List[ApplicationsDatapoint]] = field(default=None)
    target: Optional[str] = field(default=None)
    
