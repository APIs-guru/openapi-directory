from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRdsDbClusterSnapshotDetails:
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedStorage' }})
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    cluster_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterCreateTime' }})
    db_cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbClusterIdentifier' }})
    db_cluster_snapshot_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbClusterSnapshotIdentifier' }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engine' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    iam_database_authentication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamDatabaseAuthenticationEnabled' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    license_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseModel' }})
    master_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterUsername' }})
    percent_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PercentProgress' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    snapshot_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotCreateTime' }})
    snapshot_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    storage_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageEncrypted' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
