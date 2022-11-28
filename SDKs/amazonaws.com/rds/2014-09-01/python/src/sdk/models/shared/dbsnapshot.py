from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DbSnapshot:
    allocated_storage: Optional[int] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    db_instance_identifier: Optional[str] = field(default=None)
    db_snapshot_identifier: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    instance_create_time: Optional[datetime] = field(default=None)
    iops: Optional[int] = field(default=None)
    license_model: Optional[str] = field(default=None)
    master_username: Optional[str] = field(default=None)
    option_group_name: Optional[str] = field(default=None)
    percent_progress: Optional[int] = field(default=None)
    port: Optional[int] = field(default=None)
    snapshot_create_time: Optional[datetime] = field(default=None)
    snapshot_type: Optional[str] = field(default=None)
    source_region: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    tde_credential_arn: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
