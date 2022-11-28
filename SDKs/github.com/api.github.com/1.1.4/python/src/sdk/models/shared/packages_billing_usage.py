from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PackagesBillingUsage:
    included_gigabytes_bandwidth: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_gigabytes_bandwidth') }})
    total_gigabytes_bandwidth_used: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_gigabytes_bandwidth_used') }})
    total_paid_gigabytes_bandwidth_used: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_paid_gigabytes_bandwidth_used') }})
    
