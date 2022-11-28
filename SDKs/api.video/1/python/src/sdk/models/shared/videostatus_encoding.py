from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideostatusEncoding:
    metadata: Optional[VideostatusEncodingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    playable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playable') }})
    qualities: Optional[List[Quality]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualities') }})
    
