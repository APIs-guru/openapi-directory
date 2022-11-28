from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Crypto:
    cipher: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cipher') }})
    cipherparams: Cipherparams = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cipherparams') }})
    ciphertext: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertext') }})
    kdf: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kdf') }})
    kdfparams: Kdfparams = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kdfparams') }})
    mac: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    
