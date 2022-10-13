from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LaunchProfileInitializationScript:
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    studio_component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentId' }})
    studio_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentName' }})
    
