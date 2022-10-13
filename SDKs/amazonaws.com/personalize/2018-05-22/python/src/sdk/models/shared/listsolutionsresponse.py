from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import solutionsummary


@dataclass_json
@dataclass
class ListSolutionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    solutions: Optional[List[solutionsummary.SolutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutions' }})
    
