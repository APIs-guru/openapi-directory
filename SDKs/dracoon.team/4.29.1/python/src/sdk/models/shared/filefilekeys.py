from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filekeycontainer


@dataclass_json
@dataclass
class FileFileKeys:
    file_key_container: Optional[filekeycontainer.FileKeyContainer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileKeyContainer' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
