from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateAccount:
    ftp_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ftp_password') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    servicepack_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicepack_id') }})
    
