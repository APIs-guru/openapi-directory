from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import crypto


@dataclass_json
@dataclass
class Content:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    crypto: crypto.Crypto = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crypto' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
