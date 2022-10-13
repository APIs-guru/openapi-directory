from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import volume


@dataclass_json
@dataclass
class Resources:
    cpu: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    disk_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskGb' }})
    kms_key_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyReference' }})
    memory_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryGb' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
