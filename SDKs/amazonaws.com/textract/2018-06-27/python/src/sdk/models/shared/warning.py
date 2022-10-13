from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Warning:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    pages: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pages' }})
    
