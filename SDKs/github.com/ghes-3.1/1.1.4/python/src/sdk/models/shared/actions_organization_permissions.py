from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import allowed_actions_enum
from . import enabled_repositories_enum


@dataclass_json
@dataclass
class ActionsOrganizationPermissions:
    allowed_actions: Optional[allowed_actions_enum.AllowedActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_actions' }})
    enabled_repositories: enabled_repositories_enum.EnabledRepositoriesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled_repositories' }})
    selected_actions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_actions_url' }})
    selected_repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_repositories_url' }})
    
