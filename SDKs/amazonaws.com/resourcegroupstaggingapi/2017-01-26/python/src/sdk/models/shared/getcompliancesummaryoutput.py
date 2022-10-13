from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import summary


@dataclass_json
@dataclass
class GetComplianceSummaryOutput:
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    summary_list: Optional[List[summary.Summary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SummaryList' }})
    
