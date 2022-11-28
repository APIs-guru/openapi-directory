from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeStreamOutput:
    r"""DescribeStreamOutput
    Represents the output of a <code>DescribeStream</code> operation.
    """
    
    stream_description: Optional[StreamDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamDescription') }})
    
