from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EnableInsightRulesOutput:
    failures: Optional[List[PartialFailure]] = field(default=None)
    
