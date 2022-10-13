from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsitemsummary


@dataclass_json
@dataclass
class DescribeOpsItemsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    ops_item_summaries: Optional[List[opsitemsummary.OpsItemSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemSummaries' }})
    
