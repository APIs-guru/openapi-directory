from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationMaintenanceConfigurationUpdate:
    r"""ApplicationMaintenanceConfigurationUpdate
    Describes the updated maintenance configuration for the application.
    """
    
    application_maintenance_window_start_time_update: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMaintenanceWindowStartTimeUpdate') }})
    
