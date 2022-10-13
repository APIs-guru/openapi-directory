from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobscopingblock
from . import jobscopingblock


@dataclass_json
@dataclass
class Scoping:
    excludes: Optional[jobscopingblock.JobScopingBlock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    includes: Optional[jobscopingblock.JobScopingBlock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includes' }})
    
