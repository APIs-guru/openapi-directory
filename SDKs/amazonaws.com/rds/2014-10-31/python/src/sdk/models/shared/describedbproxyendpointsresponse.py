from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeDbProxyEndpointsResponse:
    db_proxy_endpoints: Optional[List[DbProxyEndpoint]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
