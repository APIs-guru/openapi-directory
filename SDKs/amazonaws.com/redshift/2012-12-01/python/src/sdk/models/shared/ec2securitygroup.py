from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Ec2SecurityGroup:
    r"""Ec2SecurityGroup
    Describes an Amazon EC2 security group.
    """
    
    ec2_security_group_name: Optional[str] = field(default=None)
    ec2_security_group_owner_id: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
