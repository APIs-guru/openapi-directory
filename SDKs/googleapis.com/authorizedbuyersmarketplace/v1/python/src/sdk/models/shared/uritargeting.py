from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class URITargeting:
    excluded_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedUris' }})
    targeted_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetedUris' }})
    
