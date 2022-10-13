from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import blueprint


@dataclass_json
@dataclass
class GetBlueprintsResult:
    blueprints: Optional[List[blueprint.Blueprint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueprints' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
