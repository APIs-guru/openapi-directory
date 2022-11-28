from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessingS3Input:
    r"""ProcessingS3Input
    Configuration for downloading input data from Amazon S3 into the processing container.
    """
    
    s3_data_type: ProcessingS3DataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataType') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPath') }})
    s3_compression_type: Optional[ProcessingS3CompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3CompressionType') }})
    s3_data_distribution_type: Optional[ProcessingS3DataDistributionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataDistributionType') }})
    s3_input_mode: Optional[ProcessingS3InputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3InputMode') }})
    
