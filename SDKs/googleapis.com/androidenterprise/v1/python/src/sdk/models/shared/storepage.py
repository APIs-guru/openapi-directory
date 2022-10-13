from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import localizedtext


@dataclass_json
@dataclass
class StorePage:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    link: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: Optional[List[localizedtext.LocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
