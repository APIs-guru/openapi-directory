from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationMaintenanceConfigurationDescription:
    application_maintenance_window_end_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMaintenanceWindowEndTime' }})
    application_maintenance_window_start_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMaintenanceWindowStartTime' }})
    
