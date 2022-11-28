from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TagStepDetails:
    r"""TagStepDetails
    <p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[List[S3Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
