from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SettingMetadata:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
