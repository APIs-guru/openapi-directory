from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LaunchProfileInitializationScript:
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    studio_component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentId') }})
    studio_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentName') }})
    
