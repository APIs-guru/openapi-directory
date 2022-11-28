from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3DataSource:
    r"""S3DataSource
    Describes the S3 data source.
    """
    
    s3_data_type: S3DataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataType') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    attribute_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeNames') }})
    s3_data_distribution_type: Optional[S3DataDistributionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataDistributionType') }})
    
