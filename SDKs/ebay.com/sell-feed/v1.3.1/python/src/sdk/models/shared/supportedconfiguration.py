from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SupportedConfiguration:
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    usage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    
