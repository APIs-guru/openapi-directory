from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    Describes the location of the channel data.
    """
    
    file_system_data_source: Optional[FileSystemDataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemDataSource') }})
    s3_data_source: Optional[S3DataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataSource') }})
    
