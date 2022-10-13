from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import uploadstatus


@dataclass_json
@dataclass
class UploadStatuses:
    results: List[uploadstatus.UploadStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
