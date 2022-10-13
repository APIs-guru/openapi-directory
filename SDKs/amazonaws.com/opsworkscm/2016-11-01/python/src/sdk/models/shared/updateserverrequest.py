from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateServerRequest:
    backup_retention_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupRetentionCount' }})
    disable_automated_backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableAutomatedBackup' }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredBackupWindow' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
