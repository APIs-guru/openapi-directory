from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import videostatus_encoding_metadata
from . import quality


@dataclass_json
@dataclass
class VideostatusEncoding:
    metadata: Optional[videostatus_encoding_metadata.VideostatusEncodingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    playable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playable' }})
    qualities: Optional[List[quality.Quality]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qualities' }})
    
