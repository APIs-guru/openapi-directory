from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Kdfparams:
    dklen: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dklen') }})
    n: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('n') }})
    p: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('p') }})
    r: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('r') }})
    salt: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('salt') }})
    
