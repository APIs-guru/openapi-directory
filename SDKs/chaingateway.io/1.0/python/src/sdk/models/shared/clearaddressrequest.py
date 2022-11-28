from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClearAddressRequest:
    ethereumaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethereumaddress') }})
    newaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newaddress') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
