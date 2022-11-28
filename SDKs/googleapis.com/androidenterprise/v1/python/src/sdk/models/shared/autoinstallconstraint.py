from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AutoInstallConstraintChargingStateConstraintEnum(str, Enum):
    CHARGING_STATE_CONSTRAINT_UNSPECIFIED = "chargingStateConstraintUnspecified"
    CHARGING_NOT_REQUIRED = "chargingNotRequired"
    CHARGING_REQUIRED = "chargingRequired"

class AutoInstallConstraintDeviceIdleStateConstraintEnum(str, Enum):
    DEVICE_IDLE_STATE_CONSTRAINT_UNSPECIFIED = "deviceIdleStateConstraintUnspecified"
    DEVICE_IDLE_NOT_REQUIRED = "deviceIdleNotRequired"
    DEVICE_IDLE_REQUIRED = "deviceIdleRequired"

class AutoInstallConstraintNetworkTypeConstraintEnum(str, Enum):
    NETWORK_TYPE_CONSTRAINT_UNSPECIFIED = "networkTypeConstraintUnspecified"
    ANY_NETWORK = "anyNetwork"
    UNMETERED_NETWORK = "unmeteredNetwork"


@dataclass_json
@dataclass
class AutoInstallConstraint:
    r"""AutoInstallConstraint
    The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.
    """
    
    charging_state_constraint: Optional[AutoInstallConstraintChargingStateConstraintEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargingStateConstraint') }})
    device_idle_state_constraint: Optional[AutoInstallConstraintDeviceIdleStateConstraintEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIdleStateConstraint') }})
    network_type_constraint: Optional[AutoInstallConstraintNetworkTypeConstraintEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTypeConstraint') }})
    
