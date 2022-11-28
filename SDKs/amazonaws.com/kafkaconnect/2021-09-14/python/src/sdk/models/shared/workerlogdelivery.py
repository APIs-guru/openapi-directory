from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkerLogDelivery:
    r"""WorkerLogDelivery
    Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
    """
    
    cloud_watch_logs: Optional[CloudWatchLogsLogDelivery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogs') }})
    firehose: Optional[FirehoseLogDelivery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firehose') }})
    s3: Optional[S3LogDelivery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    
