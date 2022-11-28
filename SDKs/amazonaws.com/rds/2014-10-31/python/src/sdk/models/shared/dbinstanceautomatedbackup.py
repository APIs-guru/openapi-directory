from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DbInstanceAutomatedBackup:
    r"""DbInstanceAutomatedBackup
    An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
    """
    
    allocated_storage: Optional[int] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    backup_retention_period: Optional[int] = field(default=None)
    db_instance_arn: Optional[str] = field(default=None)
    db_instance_automated_backups_arn: Optional[str] = field(default=None)
    db_instance_automated_backups_replications: Optional[List[DbInstanceAutomatedBackupsReplication]] = field(default=None)
    db_instance_identifier: Optional[str] = field(default=None)
    dbi_resource_id: Optional[str] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    iam_database_authentication_enabled: Optional[bool] = field(default=None)
    instance_create_time: Optional[datetime] = field(default=None)
    iops: Optional[int] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    license_model: Optional[str] = field(default=None)
    master_username: Optional[str] = field(default=None)
    option_group_name: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    region: Optional[str] = field(default=None)
    restore_window: Optional[RestoreWindow] = field(default=None)
    status: Optional[str] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    tde_credential_arn: Optional[str] = field(default=None)
    timezone: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
