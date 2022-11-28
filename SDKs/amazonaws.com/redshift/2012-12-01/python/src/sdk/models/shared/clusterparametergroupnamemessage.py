from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClusterParameterGroupNameMessage:
    r"""ClusterParameterGroupNameMessage
    <p/>
    """
    
    parameter_group_name: Optional[str] = field(default=None)
    parameter_group_status: Optional[str] = field(default=None)
    
