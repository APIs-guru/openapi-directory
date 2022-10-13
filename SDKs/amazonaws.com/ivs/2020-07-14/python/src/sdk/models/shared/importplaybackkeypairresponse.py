from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import playbackkeypair


@dataclass_json
@dataclass
class ImportPlaybackKeyPairResponse:
    key_pair: Optional[playbackkeypair.PlaybackKeyPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPair' }})
    
