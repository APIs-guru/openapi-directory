from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rootcauseexception


@dataclass_json
@dataclass
class ErrorRootCauseEntity:
    exceptions: Optional[List[rootcauseexception.RootCauseException]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Exceptions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Remote' }})
    
