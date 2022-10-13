from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import definition
from . import definition


@dataclass_json
@dataclass
class Header:
    dimension_keys: Optional[List[definition.Definition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionKeys' }})
    metrics: Optional[List[definition.Definition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    
