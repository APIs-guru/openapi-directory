from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import studiocomponent


@dataclass_json
@dataclass
class UpdateStudioComponentResponse:
    studio_component: Optional[studiocomponent.StudioComponent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponent' }})
    
