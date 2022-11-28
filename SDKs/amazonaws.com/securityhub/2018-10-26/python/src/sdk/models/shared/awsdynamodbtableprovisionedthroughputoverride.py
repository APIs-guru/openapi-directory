from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsDynamoDbTableProvisionedThroughputOverride:
    r"""AwsDynamoDbTableProvisionedThroughputOverride
    Replica-specific configuration for the provisioned throughput.
    """
    
    read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadCapacityUnits') }})
    
