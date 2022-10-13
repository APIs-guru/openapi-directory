from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportKeyPairRequest:
    key_pair_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPairName' }})
    public_key_base64: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyBase64' }})
    
