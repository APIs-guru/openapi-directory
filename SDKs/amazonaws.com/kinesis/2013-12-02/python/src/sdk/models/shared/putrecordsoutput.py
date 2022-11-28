from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutRecordsOutput:
    r"""PutRecordsOutput
     <code>PutRecords</code> results.
    """
    
    records: List[PutRecordsResultEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    encryption_type: Optional[EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    failed_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedRecordCount') }})
    
