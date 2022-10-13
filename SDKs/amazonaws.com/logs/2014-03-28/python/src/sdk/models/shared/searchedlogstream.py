from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchedLogStream:
    log_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamName' }})
    searched_completely: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchedCompletely' }})
    
