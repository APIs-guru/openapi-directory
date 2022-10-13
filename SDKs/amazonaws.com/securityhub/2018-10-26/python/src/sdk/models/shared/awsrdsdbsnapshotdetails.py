from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsrdsdbprocessorfeature


@dataclass_json
@dataclass
class AwsRdsDbSnapshotDetails:
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedStorage' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    db_instance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbInstanceIdentifier' }})
    db_snapshot_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbSnapshotIdentifier' }})
    dbi_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbiResourceId' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engine' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    iam_database_authentication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamDatabaseAuthenticationEnabled' }})
    instance_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCreateTime' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iops' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    license_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseModel' }})
    master_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterUsername' }})
    option_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptionGroupName' }})
    percent_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PercentProgress' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    processor_features: Optional[List[awsrdsdbprocessorfeature.AwsRdsDbProcessorFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessorFeatures' }})
    snapshot_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotCreateTime' }})
    snapshot_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotType' }})
    source_db_snapshot_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceDbSnapshotIdentifier' }})
    source_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceRegion' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    storage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageType' }})
    tde_credential_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TdeCredentialArn' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timezone' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
