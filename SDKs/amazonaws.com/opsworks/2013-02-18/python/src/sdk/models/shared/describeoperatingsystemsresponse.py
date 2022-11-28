from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeOperatingSystemsResponse:
    r"""DescribeOperatingSystemsResponse
    The response to a <code>DescribeOperatingSystems</code> request.
    """
    
    operating_systems: Optional[List[OperatingSystem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystems') }})
    
