from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObjectLevelStatistics:
    file_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    storage_class: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageClass' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
