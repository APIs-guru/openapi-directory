from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDeployablePatchSnapshotForInstanceRequest:
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    snapshot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotId') }})
    baseline_override: Optional[BaselineOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineOverride') }})
    
