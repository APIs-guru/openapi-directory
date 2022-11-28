from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    Information about a data source.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_keys: Optional[List[S3KeyOutput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Keys') }})
    
