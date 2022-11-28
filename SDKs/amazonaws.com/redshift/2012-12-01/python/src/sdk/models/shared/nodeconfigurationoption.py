from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class NodeConfigurationOption:
    r"""NodeConfigurationOption
    A list of node configurations.
    """
    
    estimated_disk_utilization_percent: Optional[float] = field(default=None)
    mode: Optional[ModeEnum] = field(default=None)
    node_type: Optional[str] = field(default=None)
    number_of_nodes: Optional[int] = field(default=None)
    
