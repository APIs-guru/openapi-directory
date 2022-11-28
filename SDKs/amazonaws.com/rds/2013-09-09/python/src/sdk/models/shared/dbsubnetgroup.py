from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSubnetGroup:
    db_subnet_group_description: Optional[str] = field(default=None)
    db_subnet_group_name: Optional[str] = field(default=None)
    subnet_group_status: Optional[str] = field(default=None)
    subnets: Optional[List[Subnet]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
