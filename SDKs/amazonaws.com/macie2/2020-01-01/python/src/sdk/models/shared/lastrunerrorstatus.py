from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lastrunerrorstatuscode_enum


@dataclass_json
@dataclass
class LastRunErrorStatus:
    code: Optional[lastrunerrorstatuscode_enum.LastRunErrorStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
