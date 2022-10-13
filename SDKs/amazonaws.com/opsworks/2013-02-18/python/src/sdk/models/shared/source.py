from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sourcetype_enum


@dataclass_json
@dataclass
class Source:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }})
    ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshKey' }})
    type: Optional[sourcetype_enum.SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
