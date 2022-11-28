from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryStatistics:
    r"""QueryStatistics
    Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
    """
    
    bytes_scanned: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesScanned') }})
    records_matched: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordsMatched') }})
    records_scanned: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordsScanned') }})
    
