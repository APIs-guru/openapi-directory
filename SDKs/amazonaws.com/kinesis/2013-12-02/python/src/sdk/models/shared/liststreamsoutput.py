from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListStreamsOutput:
    r"""ListStreamsOutput
    Represents the output for <code>ListStreams</code>.
    """
    
    has_more_streams: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreStreams') }})
    stream_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamNames') }})
    
