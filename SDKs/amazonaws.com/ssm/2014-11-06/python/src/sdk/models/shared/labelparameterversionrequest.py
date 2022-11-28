from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelParameterVersionRequest:
    labels: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parameter_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterVersion') }})
    
