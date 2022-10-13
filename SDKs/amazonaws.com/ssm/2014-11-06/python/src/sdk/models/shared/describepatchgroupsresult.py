from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import patchgrouppatchbaselinemapping


@dataclass_json
@dataclass
class DescribePatchGroupsResult:
    mappings: Optional[List[patchgrouppatchbaselinemapping.PatchGroupPatchBaselineMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mappings' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
