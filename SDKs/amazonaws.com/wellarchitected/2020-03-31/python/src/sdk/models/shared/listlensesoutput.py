from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lenssummary


@dataclass_json
@dataclass
class ListLensesOutput:
    lens_summaries: Optional[List[lenssummary.LensSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
