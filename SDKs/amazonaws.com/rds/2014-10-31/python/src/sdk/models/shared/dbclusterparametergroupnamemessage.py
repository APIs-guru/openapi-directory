from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbClusterParameterGroupNameMessage:
    r"""DbClusterParameterGroupNameMessage
    <p/>
    """
    
    db_cluster_parameter_group_name: Optional[str] = field(default=None)
    
