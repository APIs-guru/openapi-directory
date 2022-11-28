from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WriteRecordsRequest:
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    records: List[Record] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    common_attributes: Optional[Record] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommonAttributes') }})
    
