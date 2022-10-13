from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import collection


@dataclass_json
@dataclass
class CollectionList:
    collections: List[collection.Collection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collections' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
