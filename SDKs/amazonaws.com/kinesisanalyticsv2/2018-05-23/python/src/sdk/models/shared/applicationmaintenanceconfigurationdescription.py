from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationMaintenanceConfigurationDescription:
    r"""ApplicationMaintenanceConfigurationDescription
    The details of the maintenance configuration for the application.
    """
    
    application_maintenance_window_end_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMaintenanceWindowEndTime') }})
    application_maintenance_window_start_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMaintenanceWindowStartTime') }})
    
