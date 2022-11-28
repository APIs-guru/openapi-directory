from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStreamKeysResponse:
    stream_keys: List[StreamKeySummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamKeys') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
