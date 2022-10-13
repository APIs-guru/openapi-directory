from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import managedconfiguration


@dataclass_json
@dataclass
class ManagedConfigurationsForDeviceListResponse:
    managed_configuration_for_device: Optional[List[managedconfiguration.ManagedConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedConfigurationForDevice' }})
    
