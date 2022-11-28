from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessToken:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    
