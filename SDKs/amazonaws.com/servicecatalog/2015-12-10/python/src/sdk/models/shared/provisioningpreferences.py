from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProvisioningPreferences:
    stack_set_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetAccounts' }})
    stack_set_failure_tolerance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetFailureToleranceCount' }})
    stack_set_failure_tolerance_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetFailureTolerancePercentage' }})
    stack_set_max_concurrency_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetMaxConcurrencyCount' }})
    stack_set_max_concurrency_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetMaxConcurrencyPercentage' }})
    stack_set_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetRegions' }})
    
