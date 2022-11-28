from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchedLogStream:
    r"""SearchedLogStream
    Represents the search status of a log stream.
    """
    
    log_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamName') }})
    searched_completely: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchedCompletely') }})
    
