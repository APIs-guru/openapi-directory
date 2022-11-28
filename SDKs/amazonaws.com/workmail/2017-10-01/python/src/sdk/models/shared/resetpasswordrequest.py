from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResetPasswordRequest:
    organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
