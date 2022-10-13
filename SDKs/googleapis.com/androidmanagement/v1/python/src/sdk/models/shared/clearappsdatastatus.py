from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import perappresult


@dataclass_json
@dataclass
class ClearAppsDataStatus:
    results: Optional[dict[str, perappresult.PerAppResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
