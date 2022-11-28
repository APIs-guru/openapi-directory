from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeDataSharesForProducerResult:
    data_shares: Optional[List[DataShare]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
