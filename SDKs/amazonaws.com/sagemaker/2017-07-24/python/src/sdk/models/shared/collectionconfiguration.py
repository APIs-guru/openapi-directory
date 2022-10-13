from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CollectionConfiguration:
    collection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionName' }})
    collection_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionParameters' }})
    
