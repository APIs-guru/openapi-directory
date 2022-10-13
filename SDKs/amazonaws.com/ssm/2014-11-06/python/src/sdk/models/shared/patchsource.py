from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PatchSource:
    configuration: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    products: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Products' }})
    
