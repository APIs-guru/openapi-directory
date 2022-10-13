from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import file
from . import translation


@dataclass_json
@dataclass
class Screenshot:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    file: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    translations: Optional[List[translation.Translation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translations' }})
    
