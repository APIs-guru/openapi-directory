from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import blockaction
from . import wipeaction


@dataclass_json
@dataclass
class PolicyEnforcementRule:
    block_action: Optional[blockaction.BlockAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockAction' }})
    setting_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingName' }})
    wipe_action: Optional[wipeaction.WipeAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wipeAction' }})
    
