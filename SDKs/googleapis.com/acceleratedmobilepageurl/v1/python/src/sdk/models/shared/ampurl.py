from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AmpURL:
    amp_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ampUrl' }})
    cdn_amp_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cdnAmpUrl' }})
    original_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalUrl' }})
    
