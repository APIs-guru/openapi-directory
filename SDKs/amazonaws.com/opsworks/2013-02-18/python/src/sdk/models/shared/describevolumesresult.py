from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeVolumesResult:
    r"""DescribeVolumesResult
    Contains the response to a <code>DescribeVolumes</code> request.
    """
    
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Volumes') }})
    
