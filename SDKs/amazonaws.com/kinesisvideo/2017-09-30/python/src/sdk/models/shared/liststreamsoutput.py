from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStreamsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    stream_info_list: Optional[List[StreamInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamInfoList') }})
    
