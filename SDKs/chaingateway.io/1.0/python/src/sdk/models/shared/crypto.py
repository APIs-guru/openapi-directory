from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cipherparams
from . import kdfparams


@dataclass_json
@dataclass
class Crypto:
    cipher: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cipher' }})
    cipherparams: cipherparams.Cipherparams = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cipherparams' }})
    ciphertext: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ciphertext' }})
    kdf: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kdf' }})
    kdfparams: kdfparams.Kdfparams = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kdfparams' }})
    mac: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac' }})
    
