from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PendingModifiedValues:
    r"""PendingModifiedValues
     This data type is used as a response element in the <code>ModifyDBInstance</code> operation and contains changes that will be applied during the next maintenance window. 
    """
    
    allocated_storage: Optional[int] = field(default=None)
    backup_retention_period: Optional[int] = field(default=None)
    ca_certificate_identifier: Optional[str] = field(default=None)
    db_instance_class: Optional[str] = field(default=None)
    db_instance_identifier: Optional[str] = field(default=None)
    db_subnet_group_name: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    iam_database_authentication_enabled: Optional[bool] = field(default=None)
    iops: Optional[int] = field(default=None)
    license_model: Optional[str] = field(default=None)
    master_user_password: Optional[str] = field(default=None)
    multi_az: Optional[bool] = field(default=None)
    pending_cloudwatch_logs_exports: Optional[PendingCloudwatchLogsExports] = field(default=None)
    port: Optional[int] = field(default=None)
    processor_features: Optional[List[ProcessorFeature]] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    
