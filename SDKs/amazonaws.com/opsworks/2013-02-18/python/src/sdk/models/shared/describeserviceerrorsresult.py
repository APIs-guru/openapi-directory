from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeServiceErrorsResult:
    r"""DescribeServiceErrorsResult
    Contains the response to a <code>DescribeServiceErrors</code> request.
    """
    
    service_errors: Optional[List[ServiceError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceErrors') }})
    
