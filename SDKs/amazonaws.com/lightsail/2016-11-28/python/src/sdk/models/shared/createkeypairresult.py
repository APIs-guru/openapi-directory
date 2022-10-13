from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keypair
from . import operation


@dataclass_json
@dataclass
class CreateKeyPairResult:
    key_pair: Optional[keypair.KeyPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPair' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    private_key_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKeyBase64' }})
    public_key_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyBase64' }})
    
