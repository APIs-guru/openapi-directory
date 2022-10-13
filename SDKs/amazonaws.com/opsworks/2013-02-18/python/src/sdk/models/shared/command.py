from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Command:
    acknowledged_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcknowledgedAt' }})
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommandId' }})
    completed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedAt' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExitCode' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogUrl' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
