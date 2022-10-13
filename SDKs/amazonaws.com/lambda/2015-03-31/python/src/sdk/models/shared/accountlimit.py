from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountLimit:
    code_size_unzipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSizeUnzipped' }})
    code_size_zipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSizeZipped' }})
    concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConcurrentExecutions' }})
    total_code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCodeSize' }})
    unreserved_concurrent_executions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnreservedConcurrentExecutions' }})
    
