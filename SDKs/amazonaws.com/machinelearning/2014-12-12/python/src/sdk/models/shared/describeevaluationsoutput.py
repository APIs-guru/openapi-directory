from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import evaluation


@dataclass_json
@dataclass
class DescribeEvaluationsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    results: Optional[List[evaluation.Evaluation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    
