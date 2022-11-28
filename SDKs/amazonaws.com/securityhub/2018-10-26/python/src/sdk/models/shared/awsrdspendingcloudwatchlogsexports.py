from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRdsPendingCloudWatchLogsExports:
    r"""AwsRdsPendingCloudWatchLogsExports
    Identifies the log types to enable and disable.
    """
    
    log_types_to_disable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogTypesToDisable') }})
    log_types_to_enable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogTypesToEnable') }})
    
