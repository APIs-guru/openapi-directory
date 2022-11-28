from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParquetOptions:
    enable_list_inference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableListInference') }})
    enum_as_string: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumAsString') }})
    
