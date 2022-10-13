from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import projectversionstatus_enum


@dataclass_json
@dataclass
class StopProjectVersionResponse:
    status: Optional[projectversionstatus_enum.ProjectVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
