from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetentionProperties:
    r"""RetentionProperties
    Retention properties contain the duration for which your time series data must be stored in the magnetic store and the memory store. 
    """
    
    magnetic_store_retention_period_in_days: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MagneticStoreRetentionPeriodInDays') }})
    memory_store_retention_period_in_hours: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemoryStoreRetentionPeriodInHours') }})
    
