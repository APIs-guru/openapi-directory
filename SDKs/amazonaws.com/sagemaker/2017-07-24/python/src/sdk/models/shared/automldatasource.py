from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoMlDataSource:
    r"""AutoMlDataSource
    The data source for the Autopilot job.
    """
    
    s3_data_source: AutoMls3DataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataSource') }})
    
