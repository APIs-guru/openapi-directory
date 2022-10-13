from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import operation


@dataclass_json
@dataclass
class CreateDomainResult:
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    
