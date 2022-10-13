from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errors


@dataclass_json
@dataclass
class ErrorResponse:
    errors: Optional[List[errors.Errors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
