from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileInfo:
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileId' }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uploaded_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadedDate' }})
    
