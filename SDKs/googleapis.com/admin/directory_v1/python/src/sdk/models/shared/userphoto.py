from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserPhoto:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    photo_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoData' }})
    primary_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryEmail' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
