from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetExportJobOutput:
    r"""DatasetExportJobOutput
    The output configuration parameters of a dataset export job.
    """
    
    s3_data_destination: S3DataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DataDestination') }})
    
