from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsClusterDefaultCapacityProviderStrategyDetails:
    r"""AwsEcsClusterDefaultCapacityProviderStrategyDetails
    The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.
    """
    
    base: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Base') }})
    capacity_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityProvider') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weight') }})
    
