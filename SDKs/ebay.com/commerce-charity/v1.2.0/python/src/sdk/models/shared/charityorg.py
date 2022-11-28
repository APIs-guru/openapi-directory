from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CharityOrg:
    r"""CharityOrg
    The full location, ID, logo and other details of the charity organization.
    """
    
    charity_org_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charityOrgId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    logo_image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoImage') }})
    mission_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missionStatement') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    registration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationId') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
