from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClusterIamRole:
    r"""ClusterIamRole
    An Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other Amazon Web Services services.
    """
    
    apply_status: Optional[str] = field(default=None)
    iam_role_arn: Optional[str] = field(default=None)
    
