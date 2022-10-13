from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import engineattribute
from . import maintenancestatus_enum
from . import serverstatus_enum


@dataclass_json
@dataclass
class Server:
    associate_public_ip_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociatePublicIpAddress' }})
    backup_retention_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupRetentionCount' }})
    cloud_formation_stack_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudFormationStackArn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDomain' }})
    disable_automated_backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableAutomatedBackup' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engine' }})
    engine_attributes: Optional[List[engineattribute.EngineAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineAttributes' }})
    engine_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineModel' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceProfileArn' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPair' }})
    maintenance_status: Optional[maintenancestatus_enum.MaintenanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceStatus' }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredBackupWindow' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    server_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerArn' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRoleArn' }})
    status: Optional[serverstatus_enum.ServerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    
