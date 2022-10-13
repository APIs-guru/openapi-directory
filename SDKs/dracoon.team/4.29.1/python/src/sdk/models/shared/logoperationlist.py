from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import logoperation


@dataclass_json
@dataclass
class LogOperationList:
    operation_list: List[logoperation.LogOperation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationList' }})
    
