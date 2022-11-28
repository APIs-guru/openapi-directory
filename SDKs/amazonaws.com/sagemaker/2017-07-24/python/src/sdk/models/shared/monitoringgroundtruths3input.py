from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MonitoringGroundTruthS3Input:
    r"""MonitoringGroundTruthS3Input
    The ground truth labels for the dataset used for the monitoring job.
    """
    
    s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
