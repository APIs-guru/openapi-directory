from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RestoreServerRequest:
    backup_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupId') }})
    server_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPair') }})
    
