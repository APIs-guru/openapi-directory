from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InvokeAsyncResponse:
    r"""InvokeAsyncResponse
    Upon success, it returns empty response. Otherwise, throws an exception.
    """
    
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
