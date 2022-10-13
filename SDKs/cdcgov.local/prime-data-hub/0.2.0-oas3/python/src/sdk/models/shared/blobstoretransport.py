from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BlobStoreTransport:
    container_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    storage_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageName' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
