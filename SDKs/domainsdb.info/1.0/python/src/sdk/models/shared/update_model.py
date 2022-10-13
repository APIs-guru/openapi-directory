from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateModel:
    added: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_download: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_download' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    deleted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    deleted_download: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_download' }})
    
