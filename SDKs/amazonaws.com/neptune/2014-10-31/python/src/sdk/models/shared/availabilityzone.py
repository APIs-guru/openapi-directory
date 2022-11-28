from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Specifies an Availability Zone.
    """
    
    name: Optional[str] = field(default=None)
    
