from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import baselineoverride


@dataclass_json
@dataclass
class GetDeployablePatchSnapshotForInstanceRequest:
    baseline_override: Optional[baselineoverride.BaselineOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineOverride' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    snapshot_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotId' }})
    
