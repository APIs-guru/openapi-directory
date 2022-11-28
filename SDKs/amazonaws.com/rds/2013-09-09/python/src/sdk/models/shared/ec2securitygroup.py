from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ec2SecurityGroup:
    ec2_security_group_id: Optional[str] = field(default=None)
    ec2_security_group_name: Optional[str] = field(default=None)
    ec2_security_group_owner_id: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
