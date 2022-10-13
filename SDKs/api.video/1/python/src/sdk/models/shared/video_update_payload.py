from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadata


@dataclass_json
@dataclass
class VideoUpdatePayload:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    metadata: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    mp4_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mp4Support' }})
    panoramic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panoramic' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerId' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
