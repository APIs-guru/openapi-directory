from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowTypeInfos:
    r"""WorkflowTypeInfos
    Contains a paginated list of information structures about workflow types.
    """
    
    type_infos: List[WorkflowTypeInfo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeInfos') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
