from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ResourceRecordTypeEnum(str, Enum):
    A = "A"
    AAAA = "AAAA"
    CNAME = "CNAME"


@dataclass_json
@dataclass
class ResourceRecord:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rrdata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrdata' }})
    type: Optional[ResourceRecordTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
