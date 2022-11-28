from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SSHKey:
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    
