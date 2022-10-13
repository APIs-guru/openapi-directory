from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stackinstance


@dataclass_json
@dataclass
class ListStackInstancesForProvisionedProductOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    stack_instances: Optional[List[stackinstance.StackInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackInstances' }})
    
