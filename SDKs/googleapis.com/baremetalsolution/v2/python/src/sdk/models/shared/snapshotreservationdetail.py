from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnapshotReservationDetail:
    r"""SnapshotReservationDetail
    Details about snapshot space reservation and usage on the storage volume.
    """
    
    reserved_space_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedSpaceGib') }})
    reserved_space_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedSpacePercent') }})
    reserved_space_remaining_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedSpaceRemainingGib') }})
    reserved_space_used_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedSpaceUsedPercent') }})
    
