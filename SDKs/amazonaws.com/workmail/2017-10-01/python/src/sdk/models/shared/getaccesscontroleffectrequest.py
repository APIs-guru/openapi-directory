from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAccessControlEffectRequest:
    action: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    ip_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
