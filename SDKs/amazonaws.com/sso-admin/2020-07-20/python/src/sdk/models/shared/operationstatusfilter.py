from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import statusvalues_enum


@dataclass_json
@dataclass
class OperationStatusFilter:
    status: Optional[statusvalues_enum.StatusValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
