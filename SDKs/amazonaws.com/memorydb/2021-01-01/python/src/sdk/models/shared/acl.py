from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aclpendingchanges


@dataclass_json
@dataclass
class ACL:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    clusters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Clusters' }})
    minimum_engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumEngineVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    pending_changes: Optional[aclpendingchanges.ACLPendingChanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingChanges' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    user_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserNames' }})
    
