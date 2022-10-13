from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountUsage:
    function_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionCount' }})
    total_code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCodeSize' }})
    
