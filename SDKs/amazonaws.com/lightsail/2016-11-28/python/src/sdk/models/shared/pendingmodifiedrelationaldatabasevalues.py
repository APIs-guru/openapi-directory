from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PendingModifiedRelationalDatabaseValues:
    r"""PendingModifiedRelationalDatabaseValues
    Describes a pending database value modification.
    """
    
    backup_retention_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupRetentionEnabled') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineVersion') }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterUserPassword') }})
    
