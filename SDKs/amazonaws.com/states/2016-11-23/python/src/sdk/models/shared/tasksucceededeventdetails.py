from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskSucceededEventDetails:
    r"""TaskSucceededEventDetails
    Contains details about the successful completion of a task state.
    """
    
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    output_details: Optional[HistoryEventExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDetails') }})
    
