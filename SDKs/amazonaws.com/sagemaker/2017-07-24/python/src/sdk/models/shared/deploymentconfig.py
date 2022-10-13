from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autorollbackconfig
from . import bluegreenupdatepolicy


@dataclass_json
@dataclass
class DeploymentConfig:
    auto_rollback_configuration: Optional[autorollbackconfig.AutoRollbackConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoRollbackConfiguration' }})
    blue_green_update_policy: bluegreenupdatepolicy.BlueGreenUpdatePolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueGreenUpdatePolicy' }})
    
