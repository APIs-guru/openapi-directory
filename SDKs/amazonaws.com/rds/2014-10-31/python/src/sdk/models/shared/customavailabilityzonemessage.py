from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CustomAvailabilityZoneMessage:
    custom_availability_zones: Optional[List[CustomAvailabilityZone]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
