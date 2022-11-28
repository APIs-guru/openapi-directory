from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStudioLifecycleConfigsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    studio_lifecycle_configs: Optional[List[StudioLifecycleConfigDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioLifecycleConfigs') }})
    
