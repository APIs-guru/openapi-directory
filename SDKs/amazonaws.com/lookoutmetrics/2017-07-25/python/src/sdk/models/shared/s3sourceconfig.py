from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3SourceConfig:
    r"""S3SourceConfig
    Contains information about the configuration of the S3 bucket that contains source files.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    file_format_descriptor: Optional[FileFormatDescriptor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileFormatDescriptor') }})
    historical_data_path_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HistoricalDataPathList') }})
    templated_path_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplatedPathList') }})
    
