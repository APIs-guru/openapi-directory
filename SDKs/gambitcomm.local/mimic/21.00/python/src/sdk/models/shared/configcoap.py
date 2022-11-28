from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigCoap:
    keystore: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keystore') }})
    primary_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_port') }})
    rule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    secure_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secure_port') }})
    
