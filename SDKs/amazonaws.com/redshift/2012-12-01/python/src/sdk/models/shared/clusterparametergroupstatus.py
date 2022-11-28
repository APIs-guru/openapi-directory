from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterParameterGroupStatus:
    r"""ClusterParameterGroupStatus
    Describes the status of a parameter group.
    """
    
    cluster_parameter_status_list: Optional[List[ClusterParameterStatus]] = field(default=None)
    parameter_apply_status: Optional[str] = field(default=None)
    parameter_group_name: Optional[str] = field(default=None)
    
