from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeScanningAlertLocation:
    end_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_column' }})
    end_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_line' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_column' }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_line' }})
    
