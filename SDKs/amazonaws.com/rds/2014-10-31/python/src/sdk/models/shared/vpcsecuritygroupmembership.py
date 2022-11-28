from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VpcSecurityGroupMembership:
    r"""VpcSecurityGroupMembership
    This data type is used as a response element for queries on VPC security group membership.
    """
    
    status: Optional[str] = field(default=None)
    vpc_security_group_id: Optional[str] = field(default=None)
    
