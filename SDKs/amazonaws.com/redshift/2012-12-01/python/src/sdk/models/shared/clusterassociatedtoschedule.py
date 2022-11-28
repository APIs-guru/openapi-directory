from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ClusterAssociatedToSchedule:
    r"""ClusterAssociatedToSchedule
    <p/>
    """
    
    cluster_identifier: Optional[str] = field(default=None)
    schedule_association_state: Optional[ScheduleStateEnum] = field(default=None)
    
