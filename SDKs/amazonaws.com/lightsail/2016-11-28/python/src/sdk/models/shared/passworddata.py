from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PasswordData:
    ciphertext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ciphertext' }})
    key_pair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPairName' }})
    
