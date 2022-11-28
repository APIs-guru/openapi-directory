from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeStreamOutput:
    r"""DescribeStreamOutput
    Represents the output for <code>DescribeStream</code>.
    """
    
    stream_description: StreamDescription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamDescription') }})
    
