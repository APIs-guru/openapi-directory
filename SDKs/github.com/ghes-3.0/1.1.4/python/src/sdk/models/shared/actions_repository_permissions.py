from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import allowed_actions_enum


@dataclass_json
@dataclass
class ActionsRepositoryPermissions:
    allowed_actions: allowed_actions_enum.AllowedActionsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_actions' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    selected_actions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_actions_url' }})
    
