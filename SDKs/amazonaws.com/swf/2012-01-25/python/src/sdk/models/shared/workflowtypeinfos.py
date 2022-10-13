from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workflowtypeinfo


@dataclass_json
@dataclass
class WorkflowTypeInfos:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    type_infos: List[workflowtypeinfo.WorkflowTypeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeInfos' }})
    
