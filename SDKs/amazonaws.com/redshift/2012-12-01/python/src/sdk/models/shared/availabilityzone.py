from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Describes an availability zone.
    """
    
    name: Optional[str] = field(default=None)
    supported_platforms: Optional[List[SupportedPlatform]] = field(default=None)
    
