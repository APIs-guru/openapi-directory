from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeInsightRulesOutput:
    insight_rules: Optional[List[InsightRule]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
