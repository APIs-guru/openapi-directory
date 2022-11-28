from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Subnet:
    r"""Subnet
    <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
    """
    
    subnet_availability_zone: Optional[AvailabilityZone] = field(default=None)
    subnet_identifier: Optional[str] = field(default=None)
    subnet_status: Optional[str] = field(default=None)
    
