from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import provisionedconcurrencystatusenum_enum


@dataclass_json
@dataclass
class PutProvisionedConcurrencyConfigResponse:
    allocated_provisioned_concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedProvisionedConcurrentExecutions' }})
    available_provisioned_concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailableProvisionedConcurrentExecutions' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified' }})
    requested_provisioned_concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedProvisionedConcurrentExecutions' }})
    status: Optional[provisionedconcurrencystatusenum_enum.ProvisionedConcurrencyStatusEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    
