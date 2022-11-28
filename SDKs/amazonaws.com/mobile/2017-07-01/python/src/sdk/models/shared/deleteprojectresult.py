from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteProjectResult:
    r"""DeleteProjectResult
     Result structure used in response to request to delete a project. 
    """
    
    deleted_resources: Optional[List[Resource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedResources') }})
    orphaned_resources: Optional[List[Resource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orphanedResources') }})
    
