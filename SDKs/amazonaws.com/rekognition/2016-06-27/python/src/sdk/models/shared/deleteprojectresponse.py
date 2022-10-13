from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import projectstatus_enum


@dataclass_json
@dataclass
class DeleteProjectResponse:
    status: Optional[projectstatus_enum.ProjectStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
