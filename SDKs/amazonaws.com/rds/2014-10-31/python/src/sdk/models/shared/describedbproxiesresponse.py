from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeDbProxiesResponse:
    db_proxies: Optional[List[DbProxy]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
