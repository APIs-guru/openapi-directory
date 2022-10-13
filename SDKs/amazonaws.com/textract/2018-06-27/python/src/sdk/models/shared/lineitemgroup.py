from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lineitemfields


@dataclass_json
@dataclass
class LineItemGroup:
    line_item_group_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineItemGroupIndex' }})
    line_items: Optional[List[lineitemfields.LineItemFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineItems' }})
    
