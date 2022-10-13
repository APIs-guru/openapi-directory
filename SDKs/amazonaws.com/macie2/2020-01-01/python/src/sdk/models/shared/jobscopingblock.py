from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobscopeterm


@dataclass_json
@dataclass
class JobScopingBlock:
    and_: Optional[List[jobscopeterm.JobScopeTerm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'and' }})
    
