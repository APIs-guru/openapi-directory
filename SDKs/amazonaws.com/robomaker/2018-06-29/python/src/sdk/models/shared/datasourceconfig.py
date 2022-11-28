from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataSourceConfig:
    r"""DataSourceConfig
    Information about a data source.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    s3_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Keys') }})
    
