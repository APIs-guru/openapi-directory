from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsClusterDetails:
    r"""AwsEcsClusterDetails
    provides details about an ECS cluster.
    """
    
    capacity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityProviders') }})
    cluster_settings: Optional[List[AwsEcsClusterClusterSettingsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterSettings') }})
    configuration: Optional[AwsEcsClusterConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    default_capacity_provider_strategy: Optional[List[AwsEcsClusterDefaultCapacityProviderStrategyDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultCapacityProviderStrategy') }})
    
