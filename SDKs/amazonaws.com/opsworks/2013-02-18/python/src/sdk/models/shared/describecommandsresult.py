from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeCommandsResult:
    r"""DescribeCommandsResult
    Contains the response to a <code>DescribeCommands</code> request.
    """
    
    commands: Optional[List[Command]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Commands') }})
    
