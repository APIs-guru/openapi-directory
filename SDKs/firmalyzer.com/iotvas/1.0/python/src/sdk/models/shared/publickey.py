from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PublicKey:
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bits') }})
    
