from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetFunctionResponse:
    r"""GetFunctionResponse
    This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a>
    """
    
    code: Optional[FunctionCodeLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    configuration: Optional[FunctionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    
