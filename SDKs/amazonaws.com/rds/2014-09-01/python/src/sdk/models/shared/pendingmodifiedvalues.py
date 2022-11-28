from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PendingModifiedValues:
    allocated_storage: Optional[int] = field(default=None)
    backup_retention_period: Optional[int] = field(default=None)
    db_instance_class: Optional[str] = field(default=None)
    db_instance_identifier: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    iops: Optional[int] = field(default=None)
    master_user_password: Optional[str] = field(default=None)
    multi_az: Optional[bool] = field(default=None)
    port: Optional[int] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    
