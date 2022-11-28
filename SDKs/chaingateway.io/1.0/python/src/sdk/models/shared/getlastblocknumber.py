from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetLastBlockNumber:
    blocknumber: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocknumber') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
