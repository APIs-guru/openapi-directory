from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsecsclusterclustersettingsdetails
from . import awsecsclusterconfigurationdetails
from . import awsecsclusterdefaultcapacityproviderstrategydetails


@dataclass_json
@dataclass
class AwsEcsClusterDetails:
    capacity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityProviders' }})
    cluster_settings: Optional[List[awsecsclusterclustersettingsdetails.AwsEcsClusterClusterSettingsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterSettings' }})
    configuration: Optional[awsecsclusterconfigurationdetails.AwsEcsClusterConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    default_capacity_provider_strategy: Optional[List[awsecsclusterdefaultcapacityproviderstrategydetails.AwsEcsClusterDefaultCapacityProviderStrategyDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultCapacityProviderStrategy' }})
    
