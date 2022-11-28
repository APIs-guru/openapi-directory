from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Track:
    r"""Track
    A track configuration. The resource for TracksService.
    """
    
    releases: Optional[List[TrackRelease]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases') }})
    track: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    
