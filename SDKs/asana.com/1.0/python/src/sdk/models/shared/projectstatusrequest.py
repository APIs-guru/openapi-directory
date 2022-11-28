from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProjectStatusRequestColorEnum(str, Enum):
    GREEN = "green"
    YELLOW = "yellow"
    RED = "red"
    BLUE = "blue"


@dataclass_json
@dataclass
class ProjectStatusRequestInput:
    color: ProjectStatusRequestColorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_text') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
