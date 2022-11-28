from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class DbProxyTargetGroup:
    r"""DbProxyTargetGroup
    <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
    """
    
    connection_pool_config: Optional[ConnectionPoolConfigurationInfo] = field(default=None)
    created_date: Optional[datetime] = field(default=None)
    db_proxy_name: Optional[str] = field(default=None)
    is_default: Optional[bool] = field(default=None)
    status: Optional[str] = field(default=None)
    target_group_arn: Optional[str] = field(default=None)
    target_group_name: Optional[str] = field(default=None)
    updated_date: Optional[datetime] = field(default=None)
    
