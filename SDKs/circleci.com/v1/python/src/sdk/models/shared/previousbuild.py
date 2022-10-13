from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class PreviousBuild:
    build_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_num' }})
    build_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_time_millis' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
