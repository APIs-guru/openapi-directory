from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartApplicationRequest:
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    run_configuration: Optional[RunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfiguration') }})
    
