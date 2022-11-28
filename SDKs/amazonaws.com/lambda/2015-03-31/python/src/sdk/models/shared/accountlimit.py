from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountLimit:
    r"""AccountLimit
    Limits that are related to concurrency and storage. All file and storage sizes are in bytes.
    """
    
    code_size_unzipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSizeUnzipped') }})
    code_size_zipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSizeZipped') }})
    concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConcurrentExecutions') }})
    total_code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCodeSize') }})
    unreserved_concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnreservedConcurrentExecutions') }})
    
