from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exporttaskstatuscode_enum


@dataclass_json
@dataclass
class ExportTaskStatus:
    code: Optional[exporttaskstatuscode_enum.ExportTaskStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
