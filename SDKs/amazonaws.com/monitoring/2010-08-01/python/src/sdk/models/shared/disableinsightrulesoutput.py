from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DisableInsightRulesOutput:
    failures: Optional[List[PartialFailure]] = field(default=None)
    
