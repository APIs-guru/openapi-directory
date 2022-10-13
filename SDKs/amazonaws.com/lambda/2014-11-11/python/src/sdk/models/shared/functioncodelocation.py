from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FunctionCodeLocation:
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    repository_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryType' }})
    
