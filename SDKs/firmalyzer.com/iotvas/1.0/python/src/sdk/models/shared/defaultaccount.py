from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DefaultAccount:
    gid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    hash_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash_algorithm' }})
    home_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_dir' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pwd_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pwd_hash' }})
    shell: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shell' }})
    uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
