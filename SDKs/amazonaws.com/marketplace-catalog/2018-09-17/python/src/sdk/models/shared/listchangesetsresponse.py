from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import changesetsummarylistitem


@dataclass_json
@dataclass
class ListChangeSetsResponse:
    change_set_summary_list: Optional[List[changesetsummarylistitem.ChangeSetSummaryListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeSetSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
