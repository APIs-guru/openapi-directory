from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workspacedirectory


@dataclass_json
@dataclass
class DescribeWorkspaceDirectoriesResult:
    directories: Optional[List[workspacedirectory.WorkspaceDirectory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Directories' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
