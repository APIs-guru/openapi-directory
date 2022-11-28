from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchInferenceJobInput:
    r"""BatchInferenceJobInput
    The input configuration of a batch inference job.
    """
    
    s3_data_source: S3DataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DataSource') }})
    
