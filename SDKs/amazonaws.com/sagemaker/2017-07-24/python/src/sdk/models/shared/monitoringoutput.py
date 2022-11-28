from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringOutput:
    r"""MonitoringOutput
    The output object for a monitoring job.
    """
    
    s3_output: MonitoringS3Output = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Output') }})
    
