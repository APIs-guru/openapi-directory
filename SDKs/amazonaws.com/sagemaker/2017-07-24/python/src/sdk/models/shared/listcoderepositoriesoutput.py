from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import coderepositorysummary


@dataclass_json
@dataclass
class ListCodeRepositoriesOutput:
    code_repository_summary_list: List[coderepositorysummary.CodeRepositorySummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeRepositorySummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
