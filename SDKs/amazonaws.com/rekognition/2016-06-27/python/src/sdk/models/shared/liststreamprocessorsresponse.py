from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import streamprocessor


@dataclass_json
@dataclass
class ListStreamProcessorsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    stream_processors: Optional[List[streamprocessor.StreamProcessor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamProcessors' }})
    
