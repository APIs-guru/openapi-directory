from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformS3DataSource:
    r"""TransformS3DataSource
    Describes the S3 data source.
    """
    
    s3_data_type: S3DataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataType') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
