from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClusterParameterStatus:
    r"""ClusterParameterStatus
    Describes the status of a parameter group.
    """
    
    parameter_apply_error_description: Optional[str] = field(default=None)
    parameter_apply_status: Optional[str] = field(default=None)
    parameter_name: Optional[str] = field(default=None)
    
