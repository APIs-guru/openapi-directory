from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PendingModifiedRelationalDatabaseValues:
    backup_retention_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupRetentionEnabled' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineVersion' }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterUserPassword' }})
    
