from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateServerRequest:
    engine: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Engine') }})
    instance_profile_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceProfileArn') }})
    instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    server_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    service_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRoleArn') }})
    associate_public_ip_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociatePublicIpAddress') }})
    backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupId') }})
    backup_retention_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionCount') }})
    custom_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomCertificate') }})
    custom_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomain') }})
    custom_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomPrivateKey') }})
    disable_automated_backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableAutomatedBackup') }})
    engine_attributes: Optional[List[EngineAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineAttributes') }})
    engine_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineModel') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPair') }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredBackupWindow') }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
