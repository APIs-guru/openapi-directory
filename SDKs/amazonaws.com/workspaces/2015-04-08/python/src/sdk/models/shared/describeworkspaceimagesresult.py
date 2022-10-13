from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workspaceimage


@dataclass_json
@dataclass
class DescribeWorkspaceImagesResult:
    images: Optional[List[workspaceimage.WorkspaceImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Images' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
