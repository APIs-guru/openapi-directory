from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformDataSource:
    r"""TransformDataSource
    Describes the location of the channel data.
    """
    
    s3_data_source: TransformS3DataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataSource') }})
    
