from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DefaultAccount:
    gid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    hash_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash_algorithm') }})
    home_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_dir') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pwd_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pwd_hash') }})
    shell: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shell') }})
    uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    
