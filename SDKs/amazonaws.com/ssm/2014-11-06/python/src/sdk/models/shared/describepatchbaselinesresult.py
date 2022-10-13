from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import patchbaselineidentity


@dataclass_json
@dataclass
class DescribePatchBaselinesResult:
    baseline_identities: Optional[List[patchbaselineidentity.PatchBaselineIdentity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineIdentities' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
