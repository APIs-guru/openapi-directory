from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import definition


@dataclass_json
@dataclass
class MetadataHeader:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    metadata_keys: Optional[List[definition.Definition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataKeys' }})
    
