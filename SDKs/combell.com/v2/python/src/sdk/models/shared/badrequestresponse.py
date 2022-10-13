from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import validationerrormessage


@dataclass_json
@dataclass
class BadRequestResponse:
    validation_errors: Optional[List[validationerrormessage.ValidationErrorMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation_errors' }})
    
