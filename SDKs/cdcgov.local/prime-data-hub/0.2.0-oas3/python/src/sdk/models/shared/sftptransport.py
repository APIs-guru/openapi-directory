from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SftpTransport:
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
