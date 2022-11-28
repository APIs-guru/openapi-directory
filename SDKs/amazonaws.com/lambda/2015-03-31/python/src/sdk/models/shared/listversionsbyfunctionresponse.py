from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVersionsByFunctionResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    versions: Optional[List[FunctionConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Versions') }})
    
