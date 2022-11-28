from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UnsubscribeAddress:
    contractaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    ethereumaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethereumaddress') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
