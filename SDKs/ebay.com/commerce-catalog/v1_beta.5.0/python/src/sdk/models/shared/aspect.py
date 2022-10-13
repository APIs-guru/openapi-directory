from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Aspect:
    localized_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedName' }})
    localized_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedValues' }})
    
