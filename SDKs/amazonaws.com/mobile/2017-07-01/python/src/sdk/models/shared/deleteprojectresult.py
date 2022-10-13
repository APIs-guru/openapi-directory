from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resource
from . import resource


@dataclass_json
@dataclass
class DeleteProjectResult:
    deleted_resources: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedResources' }})
    orphaned_resources: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orphanedResources' }})
    
