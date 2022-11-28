from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Cluster:
    r"""Cluster
    Describes a cluster.
    """
    
    allow_version_upgrade: Optional[bool] = field(default=None)
    aqua_configuration: Optional[AquaConfiguration] = field(default=None)
    automated_snapshot_retention_period: Optional[int] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    availability_zone_relocation_status: Optional[str] = field(default=None)
    cluster_availability_status: Optional[str] = field(default=None)
    cluster_create_time: Optional[datetime] = field(default=None)
    cluster_identifier: Optional[str] = field(default=None)
    cluster_namespace_arn: Optional[str] = field(default=None)
    cluster_nodes: Optional[List[ClusterNode]] = field(default=None)
    cluster_parameter_groups: Optional[List[ClusterParameterGroupStatus]] = field(default=None)
    cluster_public_key: Optional[str] = field(default=None)
    cluster_revision_number: Optional[str] = field(default=None)
    cluster_security_groups: Optional[List[ClusterSecurityGroupMembership]] = field(default=None)
    cluster_snapshot_copy_status: Optional[ClusterSnapshotCopyStatus] = field(default=None)
    cluster_status: Optional[str] = field(default=None)
    cluster_subnet_group_name: Optional[str] = field(default=None)
    cluster_version: Optional[str] = field(default=None)
    db_name: Optional[str] = field(default=None)
    data_transfer_progress: Optional[DataTransferProgress] = field(default=None)
    deferred_maintenance_windows: Optional[List[DeferredMaintenanceWindow]] = field(default=None)
    elastic_ip_status: Optional[ElasticIPStatus] = field(default=None)
    elastic_resize_number_of_node_options: Optional[str] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    endpoint: Optional[Endpoint] = field(default=None)
    enhanced_vpc_routing: Optional[bool] = field(default=None)
    expected_next_snapshot_schedule_time: Optional[datetime] = field(default=None)
    expected_next_snapshot_schedule_time_status: Optional[str] = field(default=None)
    hsm_status: Optional[HsmStatus] = field(default=None)
    iam_roles: Optional[List[ClusterIamRole]] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    maintenance_track_name: Optional[str] = field(default=None)
    manual_snapshot_retention_period: Optional[int] = field(default=None)
    master_username: Optional[str] = field(default=None)
    modify_status: Optional[str] = field(default=None)
    next_maintenance_window_start_time: Optional[datetime] = field(default=None)
    node_type: Optional[str] = field(default=None)
    number_of_nodes: Optional[int] = field(default=None)
    pending_actions: Optional[List[str]] = field(default=None)
    pending_modified_values: Optional[PendingModifiedValues] = field(default=None)
    preferred_maintenance_window: Optional[str] = field(default=None)
    publicly_accessible: Optional[bool] = field(default=None)
    resize_info: Optional[ResizeInfo] = field(default=None)
    restore_status: Optional[RestoreStatus] = field(default=None)
    snapshot_schedule_identifier: Optional[str] = field(default=None)
    snapshot_schedule_state: Optional[ScheduleStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    total_storage_capacity_in_mega_bytes: Optional[int] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    vpc_security_groups: Optional[List[VpcSecurityGroupMembership]] = field(default=None)
    
