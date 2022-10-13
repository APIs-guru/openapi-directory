from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import stacksetoperationtype_enum


@dataclass_json
@dataclass
class UpdateProvisioningPreferences:
    stack_set_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetAccounts' }})
    stack_set_failure_tolerance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetFailureToleranceCount' }})
    stack_set_failure_tolerance_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetFailureTolerancePercentage' }})
    stack_set_max_concurrency_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetMaxConcurrencyCount' }})
    stack_set_max_concurrency_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetMaxConcurrencyPercentage' }})
    stack_set_operation_type: Optional[stacksetoperationtype_enum.StackSetOperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetOperationType' }})
    stack_set_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSetRegions' }})
    
