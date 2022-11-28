from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Stream:
    r"""Stream
    Represents all of the data describing a particular stream.
    """
    
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamArn') }})
    stream_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamLabel') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
