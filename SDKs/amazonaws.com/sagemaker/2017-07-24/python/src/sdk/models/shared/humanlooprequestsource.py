from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HumanLoopRequestSource:
    r"""HumanLoopRequestSource
    Container for configuring the source of human task requests.
    """
    
    aws_managed_human_loop_request_source: AwsManagedHumanLoopRequestSourceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsManagedHumanLoopRequestSource') }})
    
