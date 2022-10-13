from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomPluginFileDescription:
    file_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileMd5' }})
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSize' }})
    
