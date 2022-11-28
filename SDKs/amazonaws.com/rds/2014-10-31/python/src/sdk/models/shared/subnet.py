from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Subnet:
    r"""Subnet
     This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation. 
    """
    
    subnet_availability_zone: Optional[AvailabilityZone] = field(default=None)
    subnet_identifier: Optional[str] = field(default=None)
    subnet_outpost: Optional[Outpost] = field(default=None)
    subnet_status: Optional[str] = field(default=None)
    
