from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DbProxyTarget:
    r"""DbProxyTarget
    <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
    """
    
    endpoint: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    rds_resource_id: Optional[str] = field(default=None)
    role: Optional[TargetRoleEnum] = field(default=None)
    target_arn: Optional[str] = field(default=None)
    target_health: Optional[TargetHealth] = field(default=None)
    tracked_cluster_id: Optional[str] = field(default=None)
    type: Optional[TargetTypeEnum] = field(default=None)
    
