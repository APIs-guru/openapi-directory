from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class APICoreDtoDomainsDomainTypeEnum(str, Enum):
    SYSTEM = "System"
    GO = "Go"
    DEDICATED = "Dedicated"
    PERSONAL = "Personal"


@dataclass_json
@dataclass
class APICoreDtoDomainsDomain:
    custom404: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom404' }, 'form': { 'field_name': 'custom404' }})
    custom_homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customHomepage' }, 'form': { 'field_name': 'customHomepage' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }, 'form': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }, 'form': { 'field_name': 'name' }})
    type: Optional[APICoreDtoDomainsDomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }, 'form': { 'field_name': 'type' }})
    
