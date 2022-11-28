from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Subnet:
    subnet_availability_zone: Optional[AvailabilityZone] = field(default=None)
    subnet_identifier: Optional[str] = field(default=None)
    subnet_status: Optional[str] = field(default=None)
    
