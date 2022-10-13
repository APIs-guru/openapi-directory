from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PackagesBillingUsage:
    included_gigabytes_bandwidth: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_gigabytes_bandwidth' }})
    total_gigabytes_bandwidth_used: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_gigabytes_bandwidth_used' }})
    total_paid_gigabytes_bandwidth_used: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_paid_gigabytes_bandwidth_used' }})
    
