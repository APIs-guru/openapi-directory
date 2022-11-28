from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowDetails:
    r"""WorkflowDetails
    Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.
    """
    
    on_upload: List[WorkflowDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnUpload') }})
    
