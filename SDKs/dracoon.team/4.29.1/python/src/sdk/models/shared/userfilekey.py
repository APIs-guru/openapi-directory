from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import filekey


@dataclass_json
@dataclass
class UserFileKey:
    file_key: filekey.FileKey = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileKey' }})
    user_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
