from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parametermapentry


@dataclass_json
@dataclass
class PolicyParameter:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    map_entries: Optional[List[parametermapentry.ParameterMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MapEntries' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
