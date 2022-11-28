from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class DbProxyEndpoint:
    r"""DbProxyEndpoint
    <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the associated DB proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
    """
    
    created_date: Optional[datetime] = field(default=None)
    db_proxy_endpoint_arn: Optional[str] = field(default=None)
    db_proxy_endpoint_name: Optional[str] = field(default=None)
    db_proxy_name: Optional[str] = field(default=None)
    endpoint: Optional[str] = field(default=None)
    is_default: Optional[bool] = field(default=None)
    status: Optional[DbProxyEndpointStatusEnum] = field(default=None)
    target_role: Optional[DbProxyEndpointTargetRoleEnum] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    vpc_security_group_ids: Optional[List[str]] = field(default=None)
    vpc_subnet_ids: Optional[List[str]] = field(default=None)
    
