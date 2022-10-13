from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsrdspendingcloudwatchlogsexports
from . import awsrdsdbprocessorfeature


@dataclass_json
@dataclass
class AwsRdsDbPendingModifiedValues:
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedStorage' }})
    backup_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupRetentionPeriod' }})
    ca_certificate_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaCertificateIdentifier' }})
    db_instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbInstanceClass' }})
    db_instance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbInstanceIdentifier' }})
    db_subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbSubnetGroupName' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iops' }})
    license_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseModel' }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterUserPassword' }})
    multi_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiAZ' }})
    pending_cloud_watch_logs_exports: Optional[awsrdspendingcloudwatchlogsexports.AwsRdsPendingCloudWatchLogsExports] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingCloudWatchLogsExports' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    processor_features: Optional[List[awsrdsdbprocessorfeature.AwsRdsDbProcessorFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessorFeatures' }})
    storage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageType' }})
    
