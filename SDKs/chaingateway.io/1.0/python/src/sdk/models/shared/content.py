from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Content:
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    crypto: Crypto = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('crypto') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
