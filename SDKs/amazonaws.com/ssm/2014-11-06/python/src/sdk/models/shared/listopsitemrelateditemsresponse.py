from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsitemrelateditemsummary


@dataclass_json
@dataclass
class ListOpsItemRelatedItemsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    summaries: Optional[List[opsitemrelateditemsummary.OpsItemRelatedItemSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summaries' }})
    
