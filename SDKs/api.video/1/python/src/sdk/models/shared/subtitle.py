from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Subtitle:
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    srclang: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srclang' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
