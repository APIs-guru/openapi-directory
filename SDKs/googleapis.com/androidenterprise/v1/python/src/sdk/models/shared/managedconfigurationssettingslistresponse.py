from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import managedconfigurationssettings


@dataclass_json
@dataclass
class ManagedConfigurationsSettingsListResponse:
    managed_configurations_settings: Optional[List[managedconfigurationssettings.ManagedConfigurationsSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedConfigurationsSettings' }})
    
