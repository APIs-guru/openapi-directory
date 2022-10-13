from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RestoreServerRequest:
    backup_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupId' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPair' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
