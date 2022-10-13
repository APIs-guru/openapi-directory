from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import playbackkeypairsummary


@dataclass_json
@dataclass
class ListPlaybackKeyPairsResponse:
    key_pairs: List[playbackkeypairsummary.PlaybackKeyPairSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPairs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
