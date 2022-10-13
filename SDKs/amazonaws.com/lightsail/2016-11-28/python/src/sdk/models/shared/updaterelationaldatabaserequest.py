from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateRelationalDatabaseRequest:
    apply_immediately: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyImmediately' }})
    ca_certificate_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificateIdentifier' }})
    disable_backup_retention: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableBackupRetention' }})
    enable_backup_retention: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBackupRetention' }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterUserPassword' }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredBackupWindow' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredMaintenanceWindow' }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publiclyAccessible' }})
    relational_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseName' }})
    rotate_master_user_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotateMasterUserPassword' }})
    
