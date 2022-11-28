from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OrderableClusterOption:
    r"""OrderableClusterOption
    Describes an orderable cluster option.
    """
    
    availability_zones: Optional[List[AvailabilityZone]] = field(default=None)
    cluster_type: Optional[str] = field(default=None)
    cluster_version: Optional[str] = field(default=None)
    node_type: Optional[str] = field(default=None)
    
