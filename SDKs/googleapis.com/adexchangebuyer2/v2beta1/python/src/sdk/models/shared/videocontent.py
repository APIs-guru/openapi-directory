from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoContent:
    video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoUrl' }})
    video_vast_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoVastXml' }})
    
