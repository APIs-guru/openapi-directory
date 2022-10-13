from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IErrorInfo:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    fault_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaultMessage' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Group' }})
    user_visible_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserVisibleMessage' }})
    
