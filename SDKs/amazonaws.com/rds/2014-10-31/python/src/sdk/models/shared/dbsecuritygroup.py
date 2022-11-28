from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSecurityGroup:
    r"""DbSecurityGroup
    <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
    """
    
    db_security_group_arn: Optional[str] = field(default=None)
    db_security_group_description: Optional[str] = field(default=None)
    db_security_group_name: Optional[str] = field(default=None)
    ec2_security_groups: Optional[List[Ec2SecurityGroup]] = field(default=None)
    ip_ranges: Optional[List[IPRange]] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
