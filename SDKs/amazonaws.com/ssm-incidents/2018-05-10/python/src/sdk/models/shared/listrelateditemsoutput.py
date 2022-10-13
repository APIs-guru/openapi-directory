from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relateditem


@dataclass_json
@dataclass
class ListRelatedItemsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    related_items: List[relateditem.RelatedItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedItems' }})
    
