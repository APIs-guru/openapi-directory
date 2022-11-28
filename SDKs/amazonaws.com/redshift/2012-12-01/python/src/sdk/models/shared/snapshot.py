from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class Snapshot:
    r"""Snapshot
    Describes a snapshot.
    """
    
    accounts_with_restore_access: Optional[List[AccountWithRestoreAccess]] = field(default=None)
    actual_incremental_backup_size_in_mega_bytes: Optional[float] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    backup_progress_in_mega_bytes: Optional[float] = field(default=None)
    cluster_create_time: Optional[datetime] = field(default=None)
    cluster_identifier: Optional[str] = field(default=None)
    cluster_version: Optional[str] = field(default=None)
    current_backup_rate_in_mega_bytes_per_second: Optional[float] = field(default=None)
    db_name: Optional[str] = field(default=None)
    elapsed_time_in_seconds: Optional[int] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    encrypted_with_hsm: Optional[bool] = field(default=None)
    engine_full_version: Optional[str] = field(default=None)
    enhanced_vpc_routing: Optional[bool] = field(default=None)
    estimated_seconds_to_completion: Optional[int] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    maintenance_track_name: Optional[str] = field(default=None)
    manual_snapshot_remaining_days: Optional[int] = field(default=None)
    manual_snapshot_retention_period: Optional[int] = field(default=None)
    master_username: Optional[str] = field(default=None)
    node_type: Optional[str] = field(default=None)
    number_of_nodes: Optional[int] = field(default=None)
    owner_account: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    restorable_node_types: Optional[List[str]] = field(default=None)
    snapshot_create_time: Optional[datetime] = field(default=None)
    snapshot_identifier: Optional[str] = field(default=None)
    snapshot_retention_start_time: Optional[datetime] = field(default=None)
    snapshot_type: Optional[str] = field(default=None)
    source_region: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    total_backup_size_in_mega_bytes: Optional[float] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
