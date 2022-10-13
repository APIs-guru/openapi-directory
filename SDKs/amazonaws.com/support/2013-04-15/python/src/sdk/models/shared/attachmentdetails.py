from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachmentDetails:
    attachment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentId' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    
