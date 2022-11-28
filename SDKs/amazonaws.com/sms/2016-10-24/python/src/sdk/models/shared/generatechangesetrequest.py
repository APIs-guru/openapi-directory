from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenerateChangeSetRequest:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    changeset_format: Optional[OutputFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changesetFormat') }})
    
