from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Option:
    r"""Option
    Option details.
    """
    
    db_security_group_memberships: Optional[List[DbSecurityGroupMembership]] = field(default=None)
    option_description: Optional[str] = field(default=None)
    option_name: Optional[str] = field(default=None)
    option_settings: Optional[List[OptionSetting]] = field(default=None)
    option_version: Optional[str] = field(default=None)
    permanent: Optional[bool] = field(default=None)
    persistent: Optional[bool] = field(default=None)
    port: Optional[int] = field(default=None)
    vpc_security_group_memberships: Optional[List[VpcSecurityGroupMembership]] = field(default=None)
    
