from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MonitoringStatisticsResource:
    r"""MonitoringStatisticsResource
    The statistics resource for a monitoring job.
    """
    
    s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
