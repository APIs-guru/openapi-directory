from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidationErrorSimple:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
