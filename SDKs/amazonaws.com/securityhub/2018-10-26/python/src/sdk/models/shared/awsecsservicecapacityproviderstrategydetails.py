from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsServiceCapacityProviderStrategyDetails:
    r"""AwsEcsServiceCapacityProviderStrategyDetails
    Strategy item for the capacity provider strategy that the service uses.
    """
    
    base: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Base') }})
    capacity_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityProvider') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weight') }})
    
