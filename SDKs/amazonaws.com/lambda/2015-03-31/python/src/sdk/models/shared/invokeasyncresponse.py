from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InvokeAsyncResponse:
    r"""InvokeAsyncResponse
    A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. 
    """
    
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
