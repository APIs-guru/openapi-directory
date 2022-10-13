from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BoardPermissions:
    can_add_assets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_add_assets' }})
    can_delete_board: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_delete_board' }})
    can_invite_to_board: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_invite_to_board' }})
    can_remove_assets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_remove_assets' }})
    can_update_description: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_update_description' }})
    can_update_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_update_name' }})
    
