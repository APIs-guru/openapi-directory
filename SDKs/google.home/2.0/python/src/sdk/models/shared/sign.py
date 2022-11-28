from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Sign:
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    intermediate_certs: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intermediate_certs') }})
    nonce: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    signed_data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signed_data') }})
    
