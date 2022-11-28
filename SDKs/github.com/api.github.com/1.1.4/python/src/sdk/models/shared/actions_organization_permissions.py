from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionsOrganizationPermissions:
    allowed_actions: AllowedActionsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    enabled_repositories: EnabledRepositoriesEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_repositories') }})
    selected_actions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_actions_url') }})
    selected_repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repositories_url') }})
    
