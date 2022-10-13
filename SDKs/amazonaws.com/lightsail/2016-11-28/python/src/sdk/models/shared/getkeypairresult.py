from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keypair


@dataclass_json
@dataclass
class GetKeyPairResult:
    key_pair: Optional[keypair.KeyPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPair' }})
    
