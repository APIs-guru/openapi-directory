from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collection


@dataclass_json
@dataclass
class CollectionsList:
    collections: Optional[List[collection.Collection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collections' }})
    
