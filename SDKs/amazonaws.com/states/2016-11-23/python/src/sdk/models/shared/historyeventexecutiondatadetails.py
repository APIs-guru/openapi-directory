from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HistoryEventExecutionDataDetails:
    r"""HistoryEventExecutionDataDetails
    Provides details about input or output in an execution history event.
    """
    
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncated') }})
    
