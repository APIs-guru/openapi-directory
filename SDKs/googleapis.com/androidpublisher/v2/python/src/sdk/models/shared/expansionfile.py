from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExpansionFile:
    file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSize' }})
    references_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referencesVersion' }})
    
