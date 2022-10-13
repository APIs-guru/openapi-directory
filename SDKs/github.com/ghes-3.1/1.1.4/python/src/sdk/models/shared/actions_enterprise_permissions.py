from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import allowed_actions_enum
from . import enabled_organizations_enum


@dataclass_json
@dataclass
class ActionsEnterprisePermissions:
    allowed_actions: allowed_actions_enum.AllowedActionsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_actions' }})
    enabled_organizations: enabled_organizations_enum.EnabledOrganizationsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled_organizations' }})
    selected_actions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_actions_url' }})
    selected_organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_organizations_url' }})
    
