from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancepatchstatefilter


@dataclass_json
@dataclass
class DescribeInstancePatchStatesForPatchGroupRequest:
    filters: Optional[List[instancepatchstatefilter.InstancePatchStateFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    patch_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchGroup' }})
    
