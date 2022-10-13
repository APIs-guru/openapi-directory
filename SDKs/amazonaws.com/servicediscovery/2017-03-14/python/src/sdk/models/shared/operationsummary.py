from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operationstatus_enum


@dataclass_json
@dataclass
class OperationSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    status: Optional[operationstatus_enum.OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
