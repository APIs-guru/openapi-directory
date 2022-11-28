from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchParametersResponse:
    example: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('example') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    paramname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramname') }})
    valuelist: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuelist') }})
    
