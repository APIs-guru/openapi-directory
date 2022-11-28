from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VpcSecurityGroupMembership:
    r"""VpcSecurityGroupMembership
    Describes the members of a VPC security group.
    """
    
    status: Optional[str] = field(default=None)
    vpc_security_group_id: Optional[str] = field(default=None)
    
