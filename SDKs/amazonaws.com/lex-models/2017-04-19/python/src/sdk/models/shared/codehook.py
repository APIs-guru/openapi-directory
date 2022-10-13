from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeHook:
    message_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageVersion' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
