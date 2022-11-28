from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DbInstance:
    allocated_storage: Optional[int] = field(default=None)
    auto_minor_version_upgrade: Optional[bool] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    backup_retention_period: Optional[int] = field(default=None)
    character_set_name: Optional[str] = field(default=None)
    db_instance_class: Optional[str] = field(default=None)
    db_instance_identifier: Optional[str] = field(default=None)
    db_instance_status: Optional[str] = field(default=None)
    db_name: Optional[str] = field(default=None)
    db_parameter_groups: Optional[List[DbParameterGroupStatus]] = field(default=None)
    db_security_groups: Optional[List[DbSecurityGroupMembership]] = field(default=None)
    db_subnet_group: Optional[DbSubnetGroup] = field(default=None)
    endpoint: Optional[Endpoint] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    instance_create_time: Optional[datetime] = field(default=None)
    iops: Optional[int] = field(default=None)
    latest_restorable_time: Optional[datetime] = field(default=None)
    license_model: Optional[str] = field(default=None)
    master_username: Optional[str] = field(default=None)
    multi_az: Optional[bool] = field(default=None)
    option_group_memberships: Optional[List[OptionGroupMembership]] = field(default=None)
    pending_modified_values: Optional[PendingModifiedValues] = field(default=None)
    preferred_backup_window: Optional[str] = field(default=None)
    preferred_maintenance_window: Optional[str] = field(default=None)
    publicly_accessible: Optional[bool] = field(default=None)
    read_replica_db_instance_identifiers: Optional[List[str]] = field(default=None)
    read_replica_source_db_instance_identifier: Optional[str] = field(default=None)
    secondary_availability_zone: Optional[str] = field(default=None)
    status_infos: Optional[List[DbInstanceStatusInfo]] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    tde_credential_arn: Optional[str] = field(default=None)
    vpc_security_groups: Optional[List[VpcSecurityGroupMembership]] = field(default=None)
    
