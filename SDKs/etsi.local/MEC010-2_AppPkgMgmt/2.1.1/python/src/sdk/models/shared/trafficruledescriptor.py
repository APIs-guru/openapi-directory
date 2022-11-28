from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TrafficRuleDescriptor:
    action: ActionEnum = field()
    filter_type: FilterTypeEnum = field()
    priority: int = field()
    traffic_filter: List[TrafficFilter] = field()
    traffic_rule_id: str = field()
    dst_interface: Optional[List[InterfaceDescriptor]] = field(default=None)
    
