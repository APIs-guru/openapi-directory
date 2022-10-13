from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apprestrictionsschemarestriction


@dataclass_json
@dataclass
class AppRestrictionsSchema:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    restrictions: Optional[List[apprestrictionsschemarestriction.AppRestrictionsSchemaRestriction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    
