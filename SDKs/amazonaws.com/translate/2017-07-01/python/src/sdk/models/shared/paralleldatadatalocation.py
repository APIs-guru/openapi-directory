from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParallelDataDataLocation:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    repository_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryType' }})
    
