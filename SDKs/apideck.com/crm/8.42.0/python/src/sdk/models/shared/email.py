from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EmailTypeEnum(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    WORK = "work"
    PERSONAL = "personal"
    BILLING = "billing"
    OTHER = "other"


@dataclass_json
@dataclass
class Email:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[EmailTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
