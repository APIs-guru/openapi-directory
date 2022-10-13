from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import monitorerrorcode_enum


@dataclass_json
@dataclass
class MonitorErrorDetails:
    code: Optional[monitorerrorcode_enum.MonitorErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
