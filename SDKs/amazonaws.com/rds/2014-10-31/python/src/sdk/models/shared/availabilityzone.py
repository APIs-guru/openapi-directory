from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    <p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p>
    """
    
    name: Optional[str] = field(default=None)
    
