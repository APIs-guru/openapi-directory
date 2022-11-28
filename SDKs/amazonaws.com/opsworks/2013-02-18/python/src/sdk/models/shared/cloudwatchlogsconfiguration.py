from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWatchLogsConfiguration:
    r"""CloudWatchLogsConfiguration
    Describes the Amazon CloudWatch logs configuration for a layer.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    log_streams: Optional[List[CloudWatchLogsLogStream]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogStreams') }})
    
