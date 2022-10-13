from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import findingsfilterlistitem


@dataclass_json
@dataclass
class ListFindingsFiltersResponse:
    findings_filter_list_items: Optional[List[findingsfilterlistitem.FindingsFilterListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingsFilterListItems' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
