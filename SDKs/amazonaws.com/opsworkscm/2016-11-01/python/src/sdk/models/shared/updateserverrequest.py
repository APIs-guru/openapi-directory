from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateServerRequest:
    server_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    backup_retention_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionCount') }})
    disable_automated_backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableAutomatedBackup') }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredBackupWindow') }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    
