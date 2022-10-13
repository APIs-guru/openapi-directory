from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import workflowdetail


@dataclass_json
@dataclass
class WorkflowDetails:
    on_upload: List[workflowdetail.WorkflowDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnUpload' }})
    
