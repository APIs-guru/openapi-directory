from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResourceRecordTypeEnum(str, Enum):
    A = "A"
    AAAA = "AAAA"
    CNAME = "CNAME"


@dataclass_json
@dataclass
class ResourceRecord:
    r"""ResourceRecord
    A DNS resource record.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rrdata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrdata') }})
    type: Optional[ResourceRecordTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
