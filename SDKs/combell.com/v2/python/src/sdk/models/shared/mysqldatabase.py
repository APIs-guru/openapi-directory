from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MySQLDatabase:
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    actual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actual_size' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_size' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    user_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_count' }})
    
