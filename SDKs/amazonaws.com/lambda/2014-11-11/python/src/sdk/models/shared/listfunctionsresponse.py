from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFunctionsResponse:
    r"""ListFunctionsResponse
    Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>.
    """
    
    functions: Optional[List[FunctionConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Functions') }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
