from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileInfo:
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    sha1_sum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1Sum' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUrl' }})
    
