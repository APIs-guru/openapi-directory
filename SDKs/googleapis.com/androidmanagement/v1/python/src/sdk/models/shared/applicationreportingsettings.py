from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationReportingSettings:
    r"""ApplicationReportingSettings
    Settings controlling the behavior of application reports.
    """
    
    include_removed_apps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeRemovedApps') }})
    
