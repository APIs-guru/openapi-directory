from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import file


@dataclass_json
@dataclass
class FileList:
    files: List[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
