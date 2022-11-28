from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportAddressRequest:
    content: Content = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
