from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationMaintenanceConfigurationUpdate:
    application_maintenance_window_start_time_update: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMaintenanceWindowStartTimeUpdate' }})
    
