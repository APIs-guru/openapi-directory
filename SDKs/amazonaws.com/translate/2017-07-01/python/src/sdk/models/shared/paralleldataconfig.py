from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParallelDataConfig:
    r"""ParallelDataConfig
    Specifies the format and S3 location of the parallel data input file.
    """
    
    format: ParallelDataFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
