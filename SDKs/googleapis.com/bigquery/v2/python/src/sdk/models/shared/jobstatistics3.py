from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobStatistics3:
    bad_records: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badRecords') }})
    input_file_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFileBytes') }})
    input_files: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFiles') }})
    output_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputBytes') }})
    output_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputRows') }})
    
