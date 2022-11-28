from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UndeleteAlertRequest:
    r"""UndeleteAlertRequest
    A request to undelete a specific alert that was marked for deletion.
    """
    
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    
