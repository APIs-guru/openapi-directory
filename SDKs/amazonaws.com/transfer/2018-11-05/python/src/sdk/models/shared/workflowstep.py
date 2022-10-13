from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import copystepdetails
from . import customstepdetails
from . import deletestepdetails
from . import tagstepdetails
from . import workflowsteptype_enum


@dataclass_json
@dataclass
class WorkflowStep:
    copy_step_details: Optional[copystepdetails.CopyStepDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyStepDetails' }})
    custom_step_details: Optional[customstepdetails.CustomStepDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomStepDetails' }})
    delete_step_details: Optional[deletestepdetails.DeleteStepDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteStepDetails' }})
    tag_step_details: Optional[tagstepdetails.TagStepDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagStepDetails' }})
    type: Optional[workflowsteptype_enum.WorkflowStepTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
