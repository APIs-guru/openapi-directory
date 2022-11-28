from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateStreamInput:
    r"""CreateStreamInput
    Represents the input for <code>CreateStream</code>.
    """
    
    shard_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardCount') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
