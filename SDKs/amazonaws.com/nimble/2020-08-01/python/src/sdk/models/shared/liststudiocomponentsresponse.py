from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import studiocomponent


@dataclass_json
@dataclass
class ListStudioComponentsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    studio_components: Optional[List[studiocomponent.StudioComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponents' }})
    
