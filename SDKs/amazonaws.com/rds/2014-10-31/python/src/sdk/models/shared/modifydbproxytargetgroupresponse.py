from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyDbProxyTargetGroupResponse:
    db_proxy_target_group: Optional[DbProxyTargetGroup] = field(default=None)
    
