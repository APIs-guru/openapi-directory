from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DbSnapshot:
    r"""DbSnapshot
    <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
    """
    
    allocated_storage: Optional[int] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    db_instance_identifier: Optional[str] = field(default=None)
    db_snapshot_arn: Optional[str] = field(default=None)
    db_snapshot_identifier: Optional[str] = field(default=None)
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
    original_snapshot_create_time: Optional[datetime] = field(default=None)
    percent_progress: Optional[int] = field(default=None)
    port: Optional[int] = field(default=None)
    processor_features: Optional[List[ProcessorFeature]] = field(default=None)
    snapshot_create_time: Optional[datetime] = field(default=None)
    snapshot_type: Optional[str] = field(default=None)
    source_db_snapshot_identifier: Optional[str] = field(default=None)
    source_region: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    tag_list: Optional[List[Tag]] = field(default=None)
    tde_credential_arn: Optional[str] = field(default=None)
    timezone: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
