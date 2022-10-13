from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemDownloadable:
    downloadable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadable' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
