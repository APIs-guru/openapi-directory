from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetireGrantRequest:
    grant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantId') }})
    grant_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantToken') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    
