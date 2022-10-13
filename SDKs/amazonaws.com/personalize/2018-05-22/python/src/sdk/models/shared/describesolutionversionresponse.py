from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import solutionversion


@dataclass_json
@dataclass
class DescribeSolutionVersionResponse:
    solution_version: Optional[solutionversion.SolutionVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersion' }})
    
