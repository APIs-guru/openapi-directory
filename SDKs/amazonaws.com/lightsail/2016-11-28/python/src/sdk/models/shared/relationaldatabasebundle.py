from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelationalDatabaseBundle:
    r"""RelationalDatabaseBundle
    Describes a database bundle. A bundle describes the performance specifications of the database.
    """
    
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    disk_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeInGb') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    ram_size_in_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramSizeInGb') }})
    transfer_per_month_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferPerMonthInGb') }})
    
