from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status

class CapacityCommitmentPlanEnum(str, Enum):
    COMMITMENT_PLAN_UNSPECIFIED = "COMMITMENT_PLAN_UNSPECIFIED"
    FLEX = "FLEX"
    TRIAL = "TRIAL"
    MONTHLY = "MONTHLY"
    ANNUAL = "ANNUAL"

class CapacityCommitmentRenewalPlanEnum(str, Enum):
    COMMITMENT_PLAN_UNSPECIFIED = "COMMITMENT_PLAN_UNSPECIFIED"
    FLEX = "FLEX"
    TRIAL = "TRIAL"
    MONTHLY = "MONTHLY"
    ANNUAL = "ANNUAL"

class CapacityCommitmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class CapacityCommitment:
    commitment_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitmentEndTime' }})
    commitment_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitmentStartTime' }})
    failure_status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureStatus' }})
    multi_region_auxiliary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiRegionAuxiliary' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    plan: Optional[CapacityCommitmentPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    renewal_plan: Optional[CapacityCommitmentRenewalPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalPlan' }})
    slot_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotCount' }})
    state: Optional[CapacityCommitmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
