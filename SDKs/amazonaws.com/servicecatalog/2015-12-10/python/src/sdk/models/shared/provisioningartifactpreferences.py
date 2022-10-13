from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProvisioningArtifactPreferences:
    stack_set_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetAccounts' }})
    stack_set_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetRegions' }})
    
