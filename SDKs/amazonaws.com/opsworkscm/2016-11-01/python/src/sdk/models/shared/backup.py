from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import backuptype_enum
from . import backupstatus_enum


@dataclass_json
@dataclass
class Backup:
    backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupArn' }})
    backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupId' }})
    backup_type: Optional[backuptype_enum.BackupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupType' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engine' }})
    engine_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineModel' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceProfileArn' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPair' }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredBackupWindow' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    s3_data_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataSize' }})
    s3_data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataUrl' }})
    s3_log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3LogUrl' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRoleArn' }})
    status: Optional[backupstatus_enum.BackupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDescription' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tools_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToolsVersion' }})
    user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserArn' }})
    
