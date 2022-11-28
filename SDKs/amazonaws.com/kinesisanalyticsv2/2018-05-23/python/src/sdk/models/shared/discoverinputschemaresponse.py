from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscoverInputSchemaResponse:
    input_schema: Optional[SourceSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSchema') }})
    parsed_input_records: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParsedInputRecords') }})
    processed_input_records: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessedInputRecords') }})
    raw_input_records: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawInputRecords') }})
    
