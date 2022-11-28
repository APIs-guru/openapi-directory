from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateStudioLifecycleConfigRequest:
    studio_lifecycle_config_app_type: StudioLifecycleConfigAppTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioLifecycleConfigAppType') }})
    studio_lifecycle_config_content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioLifecycleConfigContent') }})
    studio_lifecycle_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioLifecycleConfigName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
