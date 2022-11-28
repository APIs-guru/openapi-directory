from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbClusterRole:
    r"""DbClusterRole
    Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB cluster.
    """
    
    feature_name: Optional[str] = field(default=None)
    role_arn: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
