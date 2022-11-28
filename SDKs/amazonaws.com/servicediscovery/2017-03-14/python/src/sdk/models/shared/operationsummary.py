from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperationSummary:
    r"""OperationSummary
    A complex type that contains information about an operation that matches the criteria that you specified in a <a href=\"https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html\">ListOperations</a> request.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    status: Optional[OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
