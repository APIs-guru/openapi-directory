from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import paralleldatastatus_enum


@dataclass_json
@dataclass
class DeleteParallelDataResponse:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[paralleldatastatus_enum.ParallelDataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
