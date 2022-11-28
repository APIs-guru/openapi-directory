from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ClusterPendingModifiedValues:
    r"""ClusterPendingModifiedValues
    This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.
    """
    
    db_cluster_identifier: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    iam_database_authentication_enabled: Optional[bool] = field(default=None)
    master_user_password: Optional[str] = field(default=None)
    pending_cloudwatch_logs_exports: Optional[PendingCloudwatchLogsExports] = field(default=None)
    
