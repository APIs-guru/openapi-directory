from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutMetricStreamOutput:
    arn: Optional[str] = field(default=None)
    
