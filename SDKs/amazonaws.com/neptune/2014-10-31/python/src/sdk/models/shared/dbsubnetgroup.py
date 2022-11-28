from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSubnetGroup:
    r"""DbSubnetGroup
    <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
    """
    
    db_subnet_group_arn: Optional[str] = field(default=None)
    db_subnet_group_description: Optional[str] = field(default=None)
    db_subnet_group_name: Optional[str] = field(default=None)
    subnet_group_status: Optional[str] = field(default=None)
    subnets: Optional[List[Subnet]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
