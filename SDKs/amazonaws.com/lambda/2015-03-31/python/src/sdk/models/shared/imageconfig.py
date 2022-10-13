from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageConfig:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Command' }})
    entry_point: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntryPoint' }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkingDirectory' }})
    
