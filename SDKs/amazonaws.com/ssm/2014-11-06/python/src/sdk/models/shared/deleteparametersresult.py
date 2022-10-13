from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteParametersResult:
    deleted_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletedParameters' }})
    invalid_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvalidParameters' }})
    
