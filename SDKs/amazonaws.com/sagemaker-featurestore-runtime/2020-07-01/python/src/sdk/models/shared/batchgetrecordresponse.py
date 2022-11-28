from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetRecordResponse:
    errors: List[BatchGetRecordError] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    records: List[BatchGetRecordResultDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    unprocessed_identifiers: List[BatchGetRecordIdentifier] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedIdentifiers') }})
    
