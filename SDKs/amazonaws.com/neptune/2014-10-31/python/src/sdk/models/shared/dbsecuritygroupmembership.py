from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbSecurityGroupMembership:
    r"""DbSecurityGroupMembership
    Specifies membership in a designated DB security group.
    """
    
    db_security_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
