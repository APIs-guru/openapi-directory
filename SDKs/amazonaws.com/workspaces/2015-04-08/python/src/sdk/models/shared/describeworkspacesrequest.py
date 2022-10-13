from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeWorkspacesRequest:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleId' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    workspace_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceIds' }})
    
