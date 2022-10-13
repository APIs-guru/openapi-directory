from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetachLunRequest:
    lun: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lun' }})
    skip_reboot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipReboot' }})
    
