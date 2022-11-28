from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class DbProxy:
    r"""DbProxy
    <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
    """
    
    auth: Optional[List[UserAuthConfigInfo]] = field(default=None)
    created_date: Optional[datetime] = field(default=None)
    db_proxy_arn: Optional[str] = field(default=None)
    db_proxy_name: Optional[str] = field(default=None)
    debug_logging: Optional[bool] = field(default=None)
    endpoint: Optional[str] = field(default=None)
    engine_family: Optional[str] = field(default=None)
    idle_client_timeout: Optional[int] = field(default=None)
    require_tls: Optional[bool] = field(default=None)
    role_arn: Optional[str] = field(default=None)
    status: Optional[DbProxyStatusEnum] = field(default=None)
    updated_date: Optional[datetime] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    vpc_security_group_ids: Optional[List[str]] = field(default=None)
    vpc_subnet_ids: Optional[List[str]] = field(default=None)
    
