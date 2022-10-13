from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import facesearchsettings


@dataclass_json
@dataclass
class StreamProcessorSettings:
    face_search: Optional[facesearchsettings.FaceSearchSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceSearch' }})
    
