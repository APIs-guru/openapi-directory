from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class DbCluster:
    r"""DbCluster
    <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
    """
    
    activity_stream_kinesis_stream_name: Optional[str] = field(default=None)
    activity_stream_kms_key_id: Optional[str] = field(default=None)
    activity_stream_mode: Optional[ActivityStreamModeEnum] = field(default=None)
    activity_stream_status: Optional[ActivityStreamStatusEnum] = field(default=None)
    allocated_storage: Optional[int] = field(default=None)
    associated_roles: Optional[List[DbClusterRole]] = field(default=None)
    automatic_restart_time: Optional[datetime] = field(default=None)
    availability_zones: Optional[List[str]] = field(default=None)
    backtrack_consumed_change_records: Optional[int] = field(default=None)
    backtrack_window: Optional[int] = field(default=None)
    backup_retention_period: Optional[int] = field(default=None)
    capacity: Optional[int] = field(default=None)
    character_set_name: Optional[str] = field(default=None)
    clone_group_id: Optional[str] = field(default=None)
    cluster_create_time: Optional[datetime] = field(default=None)
    copy_tags_to_snapshot: Optional[bool] = field(default=None)
    cross_account_clone: Optional[bool] = field(default=None)
    custom_endpoints: Optional[List[str]] = field(default=None)
    db_cluster_arn: Optional[str] = field(default=None)
    db_cluster_identifier: Optional[str] = field(default=None)
    db_cluster_members: Optional[List[DbClusterMember]] = field(default=None)
    db_cluster_option_group_memberships: Optional[List[DbClusterOptionGroupStatus]] = field(default=None)
    db_cluster_parameter_group: Optional[str] = field(default=None)
    db_subnet_group: Optional[str] = field(default=None)
    database_name: Optional[str] = field(default=None)
    db_cluster_resource_id: Optional[str] = field(default=None)
    deletion_protection: Optional[bool] = field(default=None)
    domain_memberships: Optional[List[DomainMembership]] = field(default=None)
    earliest_backtrack_time: Optional[datetime] = field(default=None)
    earliest_restorable_time: Optional[datetime] = field(default=None)
    enabled_cloudwatch_logs_exports: Optional[List[str]] = field(default=None)
    endpoint: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_mode: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    global_write_forwarding_requested: Optional[bool] = field(default=None)
    global_write_forwarding_status: Optional[WriteForwardingStatusEnum] = field(default=None)
    hosted_zone_id: Optional[str] = field(default=None)
    http_endpoint_enabled: Optional[bool] = field(default=None)
    iam_database_authentication_enabled: Optional[bool] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    latest_restorable_time: Optional[datetime] = field(default=None)
    master_username: Optional[str] = field(default=None)
    multi_az: Optional[bool] = field(default=None)
    pending_modified_values: Optional[ClusterPendingModifiedValues] = field(default=None)
    percent_progress: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    preferred_backup_window: Optional[str] = field(default=None)
    preferred_maintenance_window: Optional[str] = field(default=None)
    read_replica_identifiers: Optional[List[str]] = field(default=None)
    reader_endpoint: Optional[str] = field(default=None)
    replication_source_identifier: Optional[str] = field(default=None)
    scaling_configuration_info: Optional[ScalingConfigurationInfo] = field(default=None)
    status: Optional[str] = field(default=None)
    storage_encrypted: Optional[bool] = field(default=None)
    tag_list: Optional[List[Tag]] = field(default=None)
    vpc_security_groups: Optional[List[VpcSecurityGroupMembership]] = field(default=None)
    
