from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionsEnterprisePermissions:
    allowed_actions: AllowedActionsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    enabled_organizations: EnabledOrganizationsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_organizations') }})
    selected_actions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_actions_url') }})
    selected_organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organizations_url') }})
    
