from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import streaminfo


@dataclass_json
@dataclass
class ListStreamsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    stream_info_list: Optional[List[streaminfo.StreamInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamInfoList' }})
    
