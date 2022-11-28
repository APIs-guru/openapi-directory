from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStreamsOutput:
    r"""ListStreamsOutput
    Represents the output of a <code>ListStreams</code> operation.
    """
    
    last_evaluated_stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedStreamArn') }})
    streams: Optional[List[Stream]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Streams') }})
    
