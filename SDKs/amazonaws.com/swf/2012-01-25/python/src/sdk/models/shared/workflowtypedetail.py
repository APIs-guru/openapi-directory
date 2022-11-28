from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowTypeDetail:
    r"""WorkflowTypeDetail
    Contains details about a workflow type.
    """
    
    configuration: WorkflowTypeConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    type_info: WorkflowTypeInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeInfo') }})
    
