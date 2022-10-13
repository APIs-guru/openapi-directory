from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiveStreamAssets:
    hls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hls' }})
    iframe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iframe' }})
    player: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player' }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    
