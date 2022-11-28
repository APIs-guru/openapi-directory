from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeDbProxyTargetGroupsResponse:
    marker: Optional[str] = field(default=None)
    target_groups: Optional[List[DbProxyTargetGroup]] = field(default=None)
    
