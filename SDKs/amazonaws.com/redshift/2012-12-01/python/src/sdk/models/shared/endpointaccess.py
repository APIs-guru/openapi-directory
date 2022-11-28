from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class EndpointAccess:
    r"""EndpointAccess
    Describes a Redshift-managed VPC endpoint.
    """
    
    address: Optional[str] = field(default=None)
    cluster_identifier: Optional[str] = field(default=None)
    endpoint_create_time: Optional[datetime] = field(default=None)
    endpoint_name: Optional[str] = field(default=None)
    endpoint_status: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    resource_owner: Optional[str] = field(default=None)
    subnet_group_name: Optional[str] = field(default=None)
    vpc_endpoint: Optional[VpcEndpoint] = field(default=None)
    vpc_security_groups: Optional[List[VpcSecurityGroupMembership]] = field(default=None)
    
