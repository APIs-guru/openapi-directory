from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OptionGroup:
    r"""OptionGroup
    <p/>
    """
    
    allows_vpc_and_non_vpc_instance_memberships: Optional[bool] = field(default=None)
    engine_name: Optional[str] = field(default=None)
    major_engine_version: Optional[str] = field(default=None)
    option_group_arn: Optional[str] = field(default=None)
    option_group_description: Optional[str] = field(default=None)
    option_group_name: Optional[str] = field(default=None)
    options: Optional[List[Option]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
