from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StatusReportingSettings:
    r"""StatusReportingSettings
    Settings controlling the behavior of status reports.
    """
    
    application_reporting_settings: Optional[ApplicationReportingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationReportingSettings') }})
    application_reports_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationReportsEnabled') }})
    common_criteria_mode_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonCriteriaModeEnabled') }})
    device_settings_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSettingsEnabled') }})
    display_info_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayInfoEnabled') }})
    hardware_status_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardwareStatusEnabled') }})
    memory_info_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryInfoEnabled') }})
    network_info_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInfoEnabled') }})
    power_management_events_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerManagementEventsEnabled') }})
    software_info_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareInfoEnabled') }})
    system_properties_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemPropertiesEnabled') }})
    
