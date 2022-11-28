from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetToken:
    contractaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    decimals: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimals') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    supply: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supply') }})
    symbol: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    
