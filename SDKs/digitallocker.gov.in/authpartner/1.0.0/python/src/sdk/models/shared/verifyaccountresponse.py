from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VerifyAccountResponse:
    digilockerid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('digilockerid') }})
    registered: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registered') }})
    
