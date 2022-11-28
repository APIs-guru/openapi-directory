from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeServicesResponse:
    r"""DescribeServicesResponse
    The list of AWS services returned by the <a>DescribeServices</a> operation.
    """
    
    services: Optional[List[Service]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
