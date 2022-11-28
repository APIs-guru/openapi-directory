from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UnlabelParameterVersionRequest:
    labels: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parameter_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterVersion') }})
    
