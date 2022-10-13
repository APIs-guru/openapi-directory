from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Asp:
    code_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeId' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_time_used: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTimeUsed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    user_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userKey' }})
    
