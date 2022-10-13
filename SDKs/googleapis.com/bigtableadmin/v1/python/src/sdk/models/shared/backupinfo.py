from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BackupInfo:
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    source_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceTable' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
