from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BucketBundle:
    r"""BucketBundle
    <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p>
    """
    
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    storage_per_month_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storagePerMonthInGb') }})
    transfer_per_month_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferPerMonthInGb') }})
    
