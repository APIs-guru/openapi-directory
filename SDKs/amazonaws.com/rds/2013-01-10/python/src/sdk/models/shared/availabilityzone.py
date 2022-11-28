from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvailabilityZone:
    name: Optional[str] = field(default=None)
    provisioned_iops_capable: Optional[bool] = field(default=None)
    
