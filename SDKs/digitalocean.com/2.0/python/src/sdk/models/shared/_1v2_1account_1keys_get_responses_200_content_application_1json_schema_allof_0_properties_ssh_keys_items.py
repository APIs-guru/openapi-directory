from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSSHKeysItems:
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    
