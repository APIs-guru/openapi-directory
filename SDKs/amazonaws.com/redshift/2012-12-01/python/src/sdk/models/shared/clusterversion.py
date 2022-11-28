from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClusterVersion:
    r"""ClusterVersion
    Describes a cluster version, including the parameter group family and description of the version.
    """
    
    cluster_parameter_group_family: Optional[str] = field(default=None)
    cluster_version: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    
