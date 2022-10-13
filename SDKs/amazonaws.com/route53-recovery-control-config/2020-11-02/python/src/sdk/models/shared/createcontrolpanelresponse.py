from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import controlpanel


@dataclass_json
@dataclass
class CreateControlPanelResponse:
    control_panel: Optional[controlpanel.ControlPanel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlPanel' }})
    
