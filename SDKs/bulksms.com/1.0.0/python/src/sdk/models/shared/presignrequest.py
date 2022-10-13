from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreSignRequest:
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileExtension' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    
