from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DbCluster:
    r"""DbCluster
    <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
    """
    
    allocated_storage: Optional[int] = field(default=None)
    associated_roles: Optional[List[DbClusterRole]] = field(default=None)
    automatic_restart_time: Optional[datetime] = field(default=None)
    availability_zones: Optional[List[str]] = field(default=None)
    backup_retention_period: Optional[int] = field(default=None)
    character_set_name: Optional[str] = field(default=None)
    clone_group_id: Optional[str] = field(default=None)
    cluster_create_time: Optional[datetime] = field(default=None)
    copy_tags_to_snapshot: Optional[bool] = field(default=None)
    cross_account_clone: Optional[bool] = field(default=None)
    db_cluster_arn: Optional[str] = field(default=None)
    db_cluster_identifier: Optional[str] = field(default=None)
    db_cluster_members: Optional[List[DbClusterMember]] = field(default=None)
    db_cluster_option_group_memberships: Optional[List[DbClusterOptionGroupStatus]] = field(default=None)
    db_cluster_parameter_group: Optional[str] = field(default=None)
    db_subnet_group: Optional[str] = field(default=None)
    database_name: Optional[str] = field(default=None)
    db_cluster_resource_id: Optional[str] = field(default=None)
    deletion_protection: Optional[bool] = field(default=None)
    earliest_restorable_time: Optional[datetime] = field(default=None)
    enabled_cloudwatch_logs_exports: Optional[List[str]] = field(default=None)
    endpoint: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    hosted_zone_id: Optional[str] = field(default=None)
    iam_database_authentication_enabled: Optional[bool] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    latest_restorable_time: Optional[datetime] = field(default=None)
    master_username: Optional[str] = field(default=None)
    multi_az: Optional[bool] = field(default=None)
    percent_progress: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    preferred_backup_window: Optional[str] = field(default=None)
    preferred_maintenance_window: Optional[str] = field(default=None)
    read_replica_identifiers: Optional[List[str]] = field(default=None)
    reader_endpoint: Optional[str] = field(default=None)
    replication_source_identifier: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    storage_encrypted: Optional[bool] = field(default=None)
    vpc_security_groups: Optional[List[VpcSecurityGroupMembership]] = field(default=None)
    
