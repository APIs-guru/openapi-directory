from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetProvisionedConcurrencyConfigResponse:
    allocated_provisioned_concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedProvisionedConcurrentExecutions') }})
    available_provisioned_concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailableProvisionedConcurrentExecutions') }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified') }})
    requested_provisioned_concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedProvisionedConcurrentExecutions') }})
    status: Optional[ProvisionedConcurrencyStatusEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    
