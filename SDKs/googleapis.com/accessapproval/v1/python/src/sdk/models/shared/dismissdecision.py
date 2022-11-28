from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DismissDecision:
    r"""DismissDecision
    A decision that has been made to dismiss an approval request.
    """
    
    dismiss_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissTime') }})
    implicit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('implicit') }})
    
