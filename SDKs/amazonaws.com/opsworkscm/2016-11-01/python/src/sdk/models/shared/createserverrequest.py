from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import engineattribute
from . import tag


@dataclass_json
@dataclass
class CreateServerRequest:
    associate_public_ip_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociatePublicIpAddress' }})
    backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupId' }})
    backup_retention_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupRetentionCount' }})
    custom_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomCertificate' }})
    custom_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDomain' }})
    custom_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomPrivateKey' }})
    disable_automated_backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableAutomatedBackup' }})
    engine: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engine' }})
    engine_attributes: Optional[List[engineattribute.EngineAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineAttributes' }})
    engine_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineModel' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    instance_profile_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceProfileArn' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPair' }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredBackupWindow' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    service_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRoleArn' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
