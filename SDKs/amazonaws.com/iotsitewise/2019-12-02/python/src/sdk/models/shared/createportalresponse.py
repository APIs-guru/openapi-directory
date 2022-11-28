from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePortalResponse:
    portal_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalArn') }})
    portal_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalId') }})
    portal_start_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStartUrl') }})
    portal_status: PortalStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStatus') }})
    sso_application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssoApplicationId') }})
    
