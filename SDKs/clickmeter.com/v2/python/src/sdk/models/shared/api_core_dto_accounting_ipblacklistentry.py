from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoAccountingIPBlacklistEntry:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }, 'form': { 'field_name': 'id' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }, 'form': { 'field_name': 'ip' }})
    
