from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnumOptionInsertRequest:
    enum_option: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_option') }})
    after_enum_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('after_enum_option') }})
    before_enum_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('before_enum_option') }})
    
