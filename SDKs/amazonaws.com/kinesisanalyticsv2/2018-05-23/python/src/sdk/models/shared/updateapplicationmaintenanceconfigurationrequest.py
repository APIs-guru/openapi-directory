from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import applicationmaintenanceconfigurationupdate


@dataclass_json
@dataclass
class UpdateApplicationMaintenanceConfigurationRequest:
    application_maintenance_configuration_update: applicationmaintenanceconfigurationupdate.ApplicationMaintenanceConfigurationUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMaintenanceConfigurationUpdate' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    
