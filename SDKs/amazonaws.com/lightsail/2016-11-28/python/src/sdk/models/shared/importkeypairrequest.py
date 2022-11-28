from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportKeyPairRequest:
    key_pair_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairName') }})
    public_key_base64: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyBase64') }})
    
