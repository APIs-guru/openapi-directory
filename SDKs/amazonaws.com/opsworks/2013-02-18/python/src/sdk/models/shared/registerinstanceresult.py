from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterInstanceResult:
    r"""RegisterInstanceResult
    Contains the response to a <code>RegisterInstanceResult</code> request.
    """
    
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    
