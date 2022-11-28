from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStreamProcessorsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    stream_processors: Optional[List[StreamProcessor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamProcessors') }})
    
