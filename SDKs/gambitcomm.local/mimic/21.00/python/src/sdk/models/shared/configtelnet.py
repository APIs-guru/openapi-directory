from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigTelnet:
    keymap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keymap' }})
    paging_prompt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paging_prompt' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    prompt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prompt' }})
    rule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    userdb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userdb' }})
    
