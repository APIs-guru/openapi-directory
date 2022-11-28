from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryResponse:
    cache_hit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheHit') }})
    dml_stats: Optional[DmlStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dmlStats') }})
    errors: Optional[List[ErrorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    job_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobComplete') }})
    job_reference: Optional[JobReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobReference') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    num_dml_affected_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numDmlAffectedRows') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    rows: Optional[List[TableRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    schema: Optional[TableSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    session_info: Optional[SessionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionInfo') }})
    total_bytes_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalBytesProcessed') }})
    total_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRows') }})
    
