from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateCustomAvailabilityZoneResult:
    custom_availability_zone: Optional[CustomAvailabilityZone] = field(default=None)
    
