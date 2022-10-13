from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetentionProperties:
    magnetic_store_retention_period_in_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MagneticStoreRetentionPeriodInDays' }})
    memory_store_retention_period_in_hours: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemoryStoreRetentionPeriodInHours' }})
    
