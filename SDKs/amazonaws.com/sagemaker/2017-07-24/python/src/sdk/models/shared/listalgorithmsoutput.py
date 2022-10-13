from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import algorithmsummary


@dataclass_json
@dataclass
class ListAlgorithmsOutput:
    algorithm_summary_list: List[algorithmsummary.AlgorithmSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
