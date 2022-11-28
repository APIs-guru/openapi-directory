from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrackInfo:
    r"""TrackInfo
    Id to name association of a track.
    """
    
    track_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackAlias') }})
    track_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackId') }})
    
