from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DockerImage:
    build_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildTime' }})
    image_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageSizeBytes' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upload_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadTime' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
