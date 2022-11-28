from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class RegisterDbProxyTargetsResponse:
    db_proxy_targets: Optional[List[DbProxyTarget]] = field(default=None)
    
