from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TracksListResponse:
    r"""TracksListResponse
    Response listing all tracks.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    tracks: Optional[List[Track]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    
