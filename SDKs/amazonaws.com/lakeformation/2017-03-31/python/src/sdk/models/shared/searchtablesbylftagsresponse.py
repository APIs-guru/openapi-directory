from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taggedtable


@dataclass_json
@dataclass
class SearchTablesByLfTagsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    table_list: Optional[List[taggedtable.TaggedTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableList' }})
    
