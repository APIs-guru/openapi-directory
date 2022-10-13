from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import closestatus_enum


@dataclass_json
@dataclass
class CloseStatusFilter:
    status: closestatus_enum.CloseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
