from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Media:
    media_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaFileUri' }})
    redacted_media_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedactedMediaFileUri' }})
    
