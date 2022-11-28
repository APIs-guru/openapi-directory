from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportDataSource:
    r"""ImportDataSource
    An object that contains details about the data source of the import job.
    """
    
    data_format: DataFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    s3_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Url') }})
    
